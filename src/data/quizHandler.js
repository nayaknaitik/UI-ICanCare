import addictionTest from "./quizzes/addictionsmoker.json";
import chewerTest from "./quizzes/addictionChewer.json";
import dependenceTest from "./quizzes/dependenceTest.json";
import fourFinger from "./quizzes/fourFinger.json";
import readiness from "./quizzes/readinessTest.json";
import OralHealthTest from "./quizzes/oralHealthTest.json";
import respiratory from "./quizzes/respiratoryTest.json";
import heartTest from './quizzes/cardiovascularTest.json'
import metaTest from './quizzes/metaTest.json'
import mineral from './quizzes/mineralTest.json'
import oralhealth from './quizzes/oralHealthTest.json'
import hearing from './quizzes/hearingTest.json'
import vision from './quizzes/visionTest.json'

export function getQuizData(quizId) {
  switch (quizId) {
    case "addiction-test-001":
      return addictionTest;
    case "chewer-test-001":
      return chewerTest;
    case "dependence-test-001":
      return dependenceTest;
    case "four-finger-test-001":
      return fourFinger;
    case "oral-health-test-001":
      return oralhealth;
    case "readiness-test-001":
      return readiness;
    case "metabolic-disorder-test-001":
      return metaTest;
    case "cardiovascular-test-001":
      return heartTest;
    case "vision-test-001":
      return vision;
    case "hearing-test-001":
      return hearing;
    case "vitamin-deficiency-test-001":
      return mineral;
    case "respiratory-test-001":
      return respiratory;
    default:
      console.warn(`No quiz found with quizId: ${quizId}`);
      return null;
  }
}
