import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { getQuizData } from "../data/quizHandler";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const QuixPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const quizData = getQuizData(quizId);
  const [email, setEmail] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);

  const [currentQn, setCurrentQn] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [sectionScores, setSectionScores] = useState({});
  const [flattenedQuestions, setFlattenedQuestions] = useState([]);
  const [questionSectionMap, setQuestionSectionMap] = useState([]);
  const [currentSection, setCurrentSection] = useState("");
  const isSectionQuiz = quizData?.isMultiSection;

  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const tempQuestions = [];
    const tempSections = [];

    // Ensure the quizData and sections are properly loaded
    if (
      quizData &&
      Array.isArray(quizData.sections) &&
      quizData.sections.length > 0
    ) {
      if (isSectionQuiz) {
        // Multi-Section Quiz Handling
        quizData.sections.forEach((section) => {
          // Check if section and questions exist before accessing
          if (section && Array.isArray(section.questions || section.quesions)) {
            // Handle both "questions" and "quesions" typo for backward compatibility
            const questionsList = section.questions || section.quesions || [];

            questionsList.forEach((question) => {
              if (question) {
                tempQuestions.push({
                  question: question.question,
                  options: question.options || [],
                  sectionTitle: section.title || "Untitled Section",
                  sectionName: section.name || "",
                });
              }
            });

            if (section.title) {
              tempSections.push(section.title);
            }
          }
        });
      } else {
        // Single-Section Quiz Handling
        const singleSection = quizData.sections[0];
        if (singleSection) {
          // Handle both "questions" and "quesions" typo for backward compatibility
          const questionsList =
            singleSection.questions || singleSection.quesions || [];

          if (Array.isArray(questionsList)) {
            questionsList.forEach((question) => {
              if (question) {
                tempQuestions.push({
                  question: question.question,
                  options: question.options || [],
                  sectionTitle: singleSection.title || "Untitled Section",
                  sectionName: singleSection.name || "",
                });
              }
            });
          }

          if (singleSection.title) {
            tempSections.push(singleSection.title);
          }
        }
      }

      setFlattenedQuestions(tempQuestions);
      setQuestionSectionMap(tempSections);
      setCurrentSection(tempQuestions[0]?.sectionTitle || "");

      console.log("Flattened Questions:", tempQuestions);
      console.log("Question Section Map:", tempSections);
    }
  }, [quizData, isSectionQuiz]);

  if (!quizData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500 font-bold text-2xl">
        Quiz Not Found!
      </div>
    );
  }

  const handleOptionSelect = (index) => setSelectedOption(index);
  
  const handleNext = async () => {
    if (selectedOption === null) return;

    const currentQuestion = flattenedQuestions[currentQn];
    if (!currentQuestion) return;

    // Create question-answer pair
    const questionAnswer = {
      question: currentQuestion.question,
      answer: currentQuestion.options[selectedOption].value || currentQuestion.options[selectedOption],
      sectionTitle: currentQuestion.sectionTitle
    };

    const updatedAnswers = [...answers, questionAnswer];
    let updatedScore = score;

    const sectionTitle = currentQuestion.sectionTitle;
    const points = currentQuestion.options[selectedOption]?.score || 0;

    // Update section-wise score
    if (isSectionQuiz) {
      setSectionScores((prevScores) => ({
        ...prevScores,
        [sectionTitle]: (prevScores[sectionTitle] || 0) + parseInt(points),
      }));
    }

    updatedScore += parseInt(points);
    console.log(updatedScore);
    const totalQuestions = flattenedQuestions.length;

    try {
      // Get IP address
      // const ipResponse = await axios.get('https://api.ipify.org?format=json');
      // const ip_address = ipResponse.data.ip;

      // Calculate result only if it's the last question
      const isLastQuestion = currentQn === totalQuestions - 1;
      
      // Find matching result rule based on score
      let resultType = null;
      if (isLastQuestion) {
        if (isSectionQuiz) {
          resultType = calculateResultType(updatedScore, sectionScores);
        } else {
          // Find the matching rule based on score
          const matchingRule = quizData?.resultRules?.find(
            rule => updatedScore >= rule.minScore && updatedScore <= rule.maxScore
          );
          
          // Extract result type from rule title
          if (matchingRule?.title) {
            // const title = matchingRule.title.toLowerCase();
            const mainTitle = matchingRule.title;
            // if (title.includes('mild') || title.includes('low') || title.includes('Not Ready'))  resultType = "Mild Dependence";
            // else if (title.includes('moderate') || title.includes('Thinking')) resultType = "Moderate Dependence";
            // else if (title.includes('severe') || title.includes('high') || title.includes('Absolutely')) resultType = "Severe Dependence";
            // else if(resultType=title);
            // else resultType = "unknown";
            resultType = mainTitle;
          }
        }
      }

      // Save progress after each question
      // await axios.post(`${API_BASE_URL}/api/quizTakers`, {
      //   ip_address,
      //   score: updatedScore,
      //   result: resultType,
      //   quiz_id: quizId,
      //   answers: updatedAnswers
      // });

      // Update local state
      setCurrentQn(currentQn + 1);
      setSelectedOption(null);
      setAnswers(updatedAnswers);
      setScore(updatedScore);

      // If it's the last question, navigate to results
      if (isLastQuestion) {
      navigate("/quiz-result", {
        state: {
          quizId,
          score: updatedScore,
          answers: updatedAnswers,
          sectionScores,
          quizData,
          questionSectionMap,
            resultType
        },
      });
      } else {
        // If not the last question, update section if needed
        const nextSection = flattenedQuestions[currentQn + 1]?.sectionTitle;
        if (nextSection !== sectionTitle) {
          setCurrentSection(nextSection);
        }
      }
    } catch (error) {
      console.error("Error saving quiz progress:", error);
      // Continue with the quiz even if saving fails
      setCurrentQn(currentQn + 1);
      setSelectedOption(null);
      setAnswers(updatedAnswers);
      setScore(updatedScore);
    }
  };

  // Helper function to calculate result type for section quizzes
  const calculateResultType = (finalScore, sectionScores) => {
    if (!isSectionQuiz) return null;

    // For section quizzes, calculate based on section scores
    const maxScore = Math.max(
      sectionScores["Physical Dependence (Nicotine Addiction)"] || 0,
      sectionScores["Psychological Dependence (Emotional & Mental Triggers)"] || 0,
      sectionScores["Behavioral Dependence (Habit & Routine Triggers)"] || 0
    );

    // Check if scores differ significantly
    const scores = [
      sectionScores["Physical Dependence (Nicotine Addiction)"] || 0,
      sectionScores["Psychological Dependence (Emotional & Mental Triggers)"] || 0,
      sectionScores["Behavioral Dependence (Habit & Routine Triggers)"] || 0
    ];

    const hasDifference = scores.some((score1) => 
      scores.some((score2) => Math.abs(score1 - score2) >= 5)
    );

    if (hasDifference) {
      return "mixed";
    }

    if (maxScore <= 12) return "mild";
    if (maxScore <= 20) return "moderate";
    return "severe";
  };

  const handleBack = () => {
    if (currentQn > 0) {
      setCurrentQn(currentQn - 1);
      setSelectedOption(null);
    }
  };

  const renderQuestion = () => {
    const current = flattenedQuestions[currentQn];
    if (!current) return <div>Loading Question...</div>;

    const isNewSection = true;

    return (
      <>
        {isNewSection && isSectionQuiz && (
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              {current.sectionTitle}
            </h2>
            <p className="text-gray-500 mb-4">
              {quizData.sections.find(
                (section) => section.title === current.sectionTitle
              )?.description || ""}
            </p>
          </div>
        )}

        {renderOptions(current.question, current.options)}
      </>
    );
  };

  const renderOptions = (questionText, optionsArray) => {
    if (!Array.isArray(optionsArray) || optionsArray.length === 0) {
      return (
        <div className="text-red-500">
          No options available for this question.
        </div>
      );
    }

    return (
      <>
        <p className="text-gray-400 mb-2 font-semibold">
          Question {currentQn + 1}
        </p>
        <h2 className="text-2xl font-bold mb-8">
          {questionText || "Question missing"}
        </h2>
        <div className="flex flex-col gap-4 w-full">
          {optionsArray.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              className={`flex items-center px-6 py-4 rounded-lg border w-full text-left ${
                selectedOption === idx
                  ? "bg-[#2A8CE0] text-white border-[#2A8CE0]"
                  : "bg-white hover:bg-blue-100 hover:scale-[102%] text-black border-gray-300"
              } transition font-semibold text-md`}
            >
              <div
                className={`w-8 h-8 min-w-[2rem] rounded-full flex items-center justify-center mr-4 font-bold ${
                  selectedOption === idx
                    ? "bg-white text-[#2A8CE0]"
                    : "bg-gray-300 text-black"
                }`}
              >
                {String.fromCharCode(65 + idx)}
              </div>
              <span className="flex-1 ">{option.value || option}</span>
            </button>
          ))}
        </div>
      </>
    );
  };

  // Check if we have any questions to display
  if (flattenedQuestions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-yellow-500 font-bold text-2xl">
        Loading quiz questions...
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F2F6FB] px-4 font-[poppins] mt-4 ">
      
      <div className="bg-white border border-[#2987D7] px-6 py-2 rounded-full text-[#2987D7] font-bold text-sm shadow-sm mb-2 mt-2">
        {quizData.name || "Quiz"}
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">
        {quizData.title || "Quiz"}
      </h1>
      <div className="flex items-center justify-center mb-6 relative overflow-x-auto w-full px-4">
        <div className="flex items-center w-full md:w-5xl">
          {flattenedQuestions.map((_, index) => (
            <React.Fragment key={index}>
              {/* Circle */}
              <div
                className={`w-8 h-8 md:w-12 md:h-12 text-sm md:text-xl rounded-full flex items-center justify-center text-white font-semibold transition-all border-2 z-10 ${
                  index <= currentQn ? "bg-[#2A8CE0] border-[#2A8CE0]" : "bg-gray-300 border-gray-300"
                }`}
              >
                {index + 1}
              </div>
              {/* Line Connector */}
              {index < flattenedQuestions.length - 1 && (
                <div className={`flex-1 h-0.5 md:h-1 ${index <= currentQn ? "bg-[#2A8CE0] border-[#2A8CE0]" : "bg-gray-300 border-gray-300"} z-0 min-w-2 md:min-w-4`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="rounded-xl w-full max-w-5xl px-8 text-center min-h-[90vh]">
        {renderQuestion()}
        <div className="flex justify-between items-center mt-8 gap-4">
          <button
            onClick={handleBack}
            className="px-8 py-3 rounded-full font-semibold transition
              bg-[#2A8CE0] text-white hover:bg-[#0061ad] hover:scale-105" 
          >
            Back
          </button>
          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className={`px-8 py-3 rounded-full font-semibold transition ${
              selectedOption === null
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#2A8CE0] text-white hover:bg-[#0061ad] hover:scale-105"
            }`}
          >
            {currentQn === flattenedQuestions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
    <div></div>
    </>
  );
};

export default QuixPage;
