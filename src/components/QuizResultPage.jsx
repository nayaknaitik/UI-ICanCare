import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Meter from "../assets/Meter.svg";
import meterr from "../assets/meterr.svg";
import { getQuizData } from "../data/quizHandler";
import DependenceBarChart from "./DependenceBarChart";
import styles from "../styles/MeterPointer.module.css";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

const QuizResultPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
  }, []);

  const [rotation, setRotation] = useState(0);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [showEmailInput, setShowEmailInput] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
    setSubmitSuccess(false); // Reset success state when email changes
  };

  const handleSubmit = async () => {
    if (isValidEmail && email && !isSubmitting) {
      setIsSubmitting(true);
      try {
        // const response = await axios.post(
        //   `${API_BASE_URL}/api/quizTakers/email`,
        //   {
        //     email: email,
        //     quiz_id: quizId,
        //   }
        // );

        // if (response.data.affectedRows > 0 || response.data.affectedRows == 0) {
          setSubmitSuccess(true);
          setEmail("");
          // Hide the input after 2 seconds of success
          setTimeout(() => {
            setShowEmailInput(false);
          }, 2000);
        // } else {
        //   setError(
        //     "No matching quiz found for this email submission. Please try again later."
        //   );
        // }
      } catch (err) {
        setError(err.response?.data?.error || "Failed to submit email");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Redirect if no state is present
  useEffect(() => {
    if (!location.state) {
      navigate("/");
      return;
    }
  }, [location.state, navigate]);

  const {
    quizId,
    score,
    answers,
    quizData,
    sectionScores,
    questionSectionMap,
    physicalScore,
    psychologicalScore,
    behavioralScore,
    resultType,
  } = location.state || {};

  // Validate required data
  if (!quizId || score === undefined || !answers) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center">
        <p className="text-red-500">
          Invalid quiz data. Please retake the quiz.
        </p>
      </div>
    );
  }

  const currentQuizData = getQuizData(quizId);
  if (!currentQuizData) {
    return (
      <div className="min-h-[75vh] flex items-center justify-center">
        <p className="text-red-500">Quiz type not found. Please try again.</p>
      </div>
    );
  }

  const totalScore = currentQuizData?.scoreTotal || 10;

  let resultRule = null;

  // For all other tests, use the result rules
  resultRule = currentQuizData?.resultRules?.find(
    (rule) => score >= rule.minScore && score <= rule.maxScore
  );

  let rules = null;
  if (resultType === "mild" && currentQuizData.resultRules?.[0]) {
    rules = currentQuizData.resultRules[0];
  } else if (resultType === "moderate" && currentQuizData.resultRules?.[1]) {
    rules = currentQuizData.resultRules[1];
  } else if (resultType === "severe" && currentQuizData.resultRules?.[2]) {
    rules = currentQuizData.resultRules[2];
  } else if (resultType === "mixed" && currentQuizData.resultRules?.[3]) {
    rules = currentQuizData.resultRules[3];
  }

  const resultRuleD = currentQuizData?.resultRules?.find(
    (rule) => rule.type === resultType
  );

  function getDependenceLevel(score = 0) {
    if (score >= 6 && score <= 12) return "mild";
    if (score >= 13 && score <= 22) return "moderate";
    if (score >= 23 && score <= 30) return "severe";
    return "unknown";
  }

  function mapScoreObjectToBarProps(scoreObj = {}) {
    return {
      physical: getDependenceLevel(
        scoreObj["Physical Dependence (Nicotine Addiction)"]
      ),
      physiological: getDependenceLevel(
        scoreObj["Psychological Dependence (Emotional & Mental Triggers)"]
      ),
      emotional: getDependenceLevel(
        scoreObj["Behavioral Dependence (Habit & Routine Triggers)"]
      ),
    };
  }

  const levels = mapScoreObjectToBarProps(sectionScores);
  const isReadinessTest = quizId === "readiness-test-001";
  const isFourFingerTest = quizId === "four-finger-test-001";
  const isOralHealthTest = quizId === "oral-health-test-001";
  const perc = (score / totalScore) * 100;

  // Calculate rotation angle based on result type
  const getRotationAngle = () => {
    // For Oral Health Test
    if (isOralHealthTest) {
      if (score <= 7) {
        return -90; // Low Risk
      } else if (score >= 8 && score <= 15) {
        return 0; // Moderate Risk
      } else if (score >= 16) {
        return 90; // High Risk
      }
    }

    // For Four Finger Test
    if (isFourFingerTest) {
      switch (score) {
        case 0: // Normal (4 fingers)
          return -90; // Left position - Normal
        case 1: // Early OSMF (3 fingers)
          return 0; // Center position - Mild
        case 2: // Moderate OSMF (2 fingers)
          return 45; // Right-center - Moderate
        case 3: // Severe OSMF (1 finger or less)
          return 90; // Right position - Severe
        default:
          return 0;
      }
    }

    // For Readiness Test
    if (isReadinessTest) {
      if (score <= 7) {
        return -90; // Not Ready
      } else if (score >= 8 && score <= 14) {
        return 0; // Thinking About It
      } else if (score >= 15) {
        return 90; // Ready to Quit
      }
    }
    console.log(resultType);
    // For all other tests
    if (resultType === "Mild Dependence" || resultType === "Low" || resultType === "Low Risk" || resultType === "Mild Risk" || resultType === "Mild Addiction") {
      return -90; // Left side position
    } else if (resultType === "Moderate Dependence" || resultType === "Moderate" || resultType === "Moderate Risk" || resultType === "Moderate Risk" || resultType === "Moderate Addiction") {
      return 0; // Center position
    } else if (resultType === "Severe Dependence" || resultType === "High" || resultType === "High Risk" || resultType === "Severe Risk" || resultType === "Severe Addiction") {
      return 90; // Right side position
    }

    // Fallback to center if no result type
    return 0;
  };

  const rotationAngle = getRotationAngle();

  useEffect(() => {
    const timer = setTimeout(() => {
      setRotation(rotationAngle);
    }, 2000);
    return () => clearTimeout(timer);
  }, [rotationAngle]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-[75vh] bg-[#fff] flex items-center justify-center px-6 py-8 font-[Poppins] relative">
      {error && (
        <div className="absolute top-4 left-4 right-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-center">
          {quizId === "dependence-test-001" ? (
            <DependenceBarChart
              physical={levels.physical}
              physiological={levels.physiological}
              emotional={levels.emotional}
            />
          ) : (
            <div className="relative w-[90%] h-60">
              <img
                src={isReadinessTest ? meterr : Meter}
                alt="Risk Meter"
                className="w-full"
              />
              <div
                className="meter-pointer absolute bottom-3 top-10 md:top-10 left-1/2 origin-bottom transition-transform duration-1000 ease-out rounded-2xl"
                style={{
                  transform: `translateX(-50%) rotate(${rotationAngle}deg)`,
                  width: 0,
                  height: 0,
                  borderLeft: "6px solid transparent",
                  borderRight: "6px solid transparent",
                  borderBottom:
                    window.innerWidth < 768
                      ? "120px solid black"
                      : "180px solid black",
                }}
              ></div>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="mb-5 px-5 py-2 inline-block rounded-full text-base text-[#2987D7] bg-white border border-[#76ADFF] font-semibold">
            {quizData?.title || "Quiz Result"}
          </div>
          {quizId === "dependence-test-001" ? (
            <div className="text-left space-y-2 mb-6">
              <h3 className="text-2xl font-bold text-[#2A8CE0]">
                Your Dependence Levels
              </h3>
              <p className="text-lg text-gray-700">
                <strong>Physical:</strong> {levels.physical}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Psychological:</strong> {levels.physiological}
              </p>
              <p className="text-lg text-gray-700">
                <strong>Behavioral:</strong> {levels.emotional}
              </p>
            </div>
          ) : (
            <h2 className="text-5xl font-bold text-[#2A8CE0] mb-4 tracking-tighter">
              {resultRule?.title ||
                resultRuleD?.title ||
                (rules && rules.title) ||
                "No result found"}
            </h2>
          )}

          <p className="text-xl opacity-65 text-gray-800 mb-8 leading-tight">
            {resultRule?.description ||
              resultRuleD?.description ||
              (rules && rules.description) ||
              "There was a problem calculating your result."}
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={() => navigate("/")}
              className="bg-[#2A8CE0] hover:bg-[#0061ad] text-white px-6 py-3 rounded-lg font-semibold shadow transition-colors"
            >
              {resultRule?.cta || "Get Your Personalised Quit Plan"}
            </button>
            <button
              onClick={() => navigate("/appointment")}
              className="border border-gray-400 text-gray-800 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-50 transition-colors"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Email Input */}
      {showEmailInput && (
        <div className="fixed bottom-8 right-8 z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl w-80">
            <button
              onClick={() => setShowEmailInput(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Get Your Detailed Report
              </h3>
              <p className="text-sm text-gray-600">
                Enter your email to receive a comprehensive analysis of your
                quiz results.
              </p>
            </div>

            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                  disabled={isSubmitting}
                  className={`w-full px-4 py-2.5 text-gray-700 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 
                    ${
                      isValidEmail
                        ? "focus:ring-blue-500"
                        : "focus:ring-red-500"
                    }
                    ${isSubmitting ? "opacity-50" : ""}
                    transition-all duration-300`}
                />
                {email && !isValidEmail && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <span className="text-red-500">✗</span>
                  </div>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={!isValidEmail || !email || isSubmitting}
                className={`w-full py-2.5 px-4 rounded-lg font-medium flex items-center justify-center gap-2
                  ${
                    isValidEmail && email && !isSubmitting
                      ? "bg-[#2A8CE0] hover:bg-[#2477c0] text-white"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed"
                  }
                  transition-all duration-300`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : submitSuccess ? (
                  <span className="text-green-500">Sent Successfully!</span>
                ) : (
                  <>
                    Get Report
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </>
                )}
              </button>

              {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

              {submitSuccess && (
                <p className="text-sm text-green-500 mt-2">
                  Email submitted successfully! Check your inbox for the
                  detailed report.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizResultPage;
