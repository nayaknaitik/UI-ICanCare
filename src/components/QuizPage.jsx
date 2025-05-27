// Helper function to calculate result type
const calculateResultType = (finalScore, sectionScores) => {
  if (!isSectionQuiz) {
    // For non-section quizzes, find matching result rule based on score
    const matchingRule = currentQuizData?.resultRules?.find(
      rule => finalScore >= rule.minScore && finalScore <= rule.maxScore
    );
    
    // Extract severity level from rule title
    if (matchingRule?.title) {
      const title = matchingRule.title.toLowerCase();
      if (title.includes('mild') || title.includes('low')) return "mild";
      if (title.includes('moderate')) return "moderate";
      if (title.includes('severe') || title.includes('high')) return "severe";
    }
    return "unknown"; // Fallback if no matching rule found
  }

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