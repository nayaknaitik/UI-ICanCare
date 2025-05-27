export const quizDatabase = {
    addiction: {
      nameTag: "ADDICTION TEST",
      mainTitle: "Test for Smokers",
      questions: [
        {
          question: "How soon after you wake up do you smoke?",
          options: [
            "Within 5 minutes",
            "6–30 minutes",
            "31–60 minutes",
            "After 60 minutes",
          ],
          points: [3, 2, 1, 0],
        },
        {
          question:
            "Do you find it difficult to refrain from smoking in places where it is prohibited (e.g., temples, hospitals, theaters, workplaces)?",
          options: ["Yes", "No"],
          points: [1, 0],
        },
        {
          question: "Which cigarette would you hate to give up the most?",
          options: ["The first one in the morning", "Any other"],
          points: [1, 0],
        },
        {
          question: "How many cigarettes do you smoke per day?",
          options: ["10 or fewer", "11–20", "21–30", "31 or more"],
          points: [0, 1, 2, 3],
        },
        {
          question:
            "Do you smoke more frequently during the first hours after waking than during the rest of the day?",
          options: ["Yes", "No"],
          points: [1, 0],
        },
        {
          question:
            "Do you smoke even when you are so sick that you are in bed most of the day?",
          options: ["Yes", "No"],
          points: [1, 0],
        },
      ],
    },
  
    chewer: {
      nameTag: "CHEWER TEST",
      mainTitle: "Test for Tobacco Chewers",
      questions: [
        {
          question: "How soon after waking up do you take your first chew/dip?",
          options: [
            "Within 5 minutes",
            "6–30 minutes",
            "31–60 minutes",
            "After 60 minutes",
          ],
          points: [3, 2, 1, 0],
        },
        {
          question:
            "Do you find it difficult to refrain from using tobacco in places where it is prohibited?",
          options: ["Yes", "No"],
          points: [1, 0],
        },
        {
          question: "Which dose of tobacco would you hate to give up the most?",
          options: ["The first one in the morning", "Any other"],
          points: [1, 0],
        },
        {
          question:
            "How many pouches (gutkha, khaini, etc.) or dips of smokeless tobacco do you consume per day?",
          options: ["1-2", "3-4", "5-6", "More than 6"],
          points: [0, 1, 2, 3],
        },
        {
          question:
            "Do you use smokeless tobacco more frequently during the first hours after waking than during the rest of the day?",
          options: ["Yes", "No"],
          points: [1, 0],
        },
        {
          question:
            "Do you use tobacco even when you are so sick that you are in bed most of the day?",
          options: ["Yes", "No"],
          points: [1, 0],
        },
      ],
    },
  
    dependence: {
      nameTag: "DEPENDENCE TEST",
      mainTitle: "Understand Your Tobacco Dependence",
      instructions:
        "Rate each statement on a scale of 1 to 5 (1 = Never, 5 = Always). Your highest score determines your primary dependence type.",
      sections: {
        physical: {
          title: "Physical Dependence (Nicotine Addiction)",
          description:
            "Nicotine dependency causes withdrawal symptoms like cravings, anxiety, and fatigue.",
          questions: [
            {
              question: "I use tobacco to keep from slowing down.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question: "When I run out of tobacco, I find it unbearable.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question: "I use tobacco to perk myself up.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question:
                "I am very much aware of the times when I am not using tobacco.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question: "I use tobacco to give myself a 'lift.'",
              points: [1, 2, 3, 4, 5],
            },
            {
              question:
                "I experience strong cravings if I miss my usual tobacco use.",
              points: [1, 2, 3, 4, 5],
            },
          ],
        },
        psychological: {
          title: "Psychological Dependence (Emotional & Mental Triggers)",
          description:
            "Your tobacco use is driven by emotions like stress, anxiety, or pleasure.",
          questions: [
            {
              question: "I use tobacco when I’m upset about something.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question: "I find tobacco use pleasant and relaxing.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question:
                "I want to use tobacco when I am comfortable and relaxed.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question:
                "Part of the enjoyment of tobacco use is watching the smoke I exhale.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question:
                "I continue using tobacco despite knowing its health risks.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question: "I turn to tobacco when I feel nervous or stressed.",
              points: [1, 2, 3, 4, 5],
            },
          ],
        },
        behavioral: {
          title: "Behavioral Dependence (Habit & Routine Triggers)",
          description:
            "Your tobacco use is a habit—you smoke or chew automatically in certain situations.",
          questions: [
            {
              question:
                "Handling a cigarette/tobacco pouch is part of my enjoyment.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question:
                "I light up a cigarette or take tobacco without realizing I still have one in my hand.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question: "I use tobacco automatically without being aware of it.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question:
                "Part of the enjoyment of tobacco use comes from the steps I take to light up.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question:
                "I find it difficult to refrain from using tobacco in places where it is prohibited.",
              points: [1, 2, 3, 4, 5],
            },
            {
              question:
                "I tend to use tobacco in social settings even when I don't feel the urge.",
              points: [1, 2, 3, 4, 5],
            },
          ],
        },
      },
    },
  
    readiness: {
      nameTag: "READINESS TEST",
      mainTitle: "Assess Your Readiness to Quit",
      questions: [
        {
          question: "How long have you been using tobacco?",
          options: [
            "Less than a year",
            "1-5 years",
            "5-10 years",
            "More than 10 years",
          ],
          points: [1, 2, 3, 4],
        },
        {
          question: "How often do you consume tobacco?",
          options: [
            "Occasionally (Less than once a day)",
            "1-5 times a day",
            "More than 5 times a day",
          ],
          points: [1, 2, 3],
        },
        {
          question: "Have you tried quitting before?",
          options: ["Yes, but I relapsed", "No, I haven’t tried"],
          points: [3, 1],
        },
        {
          question: "Why do you want to quit tobacco?",
          options: [
            "For my health",
            "For my family & loved ones",
            "To save money",
            "Because I was advised by a doctor",
            "I am not sure yet",
          ],
          points: [2, 3, 2, 3, 1],
        },
        {
          question:
            "Do you feel confident that you can quit tobacco if you have the right support?",
          options: [
            "Yes, I am confident!",
            "Maybe, I need some help",
            "No, I don’t think I can quit",
          ],
          points: [4, 2, 1],
        },
        {
          question:
            "Do you think tobacco is affecting your health and quality of life?",
          options: ["Yes, I feel the impact", "No, I feel fine", "I’m not sure"],
          points: [3, 1, 2],
        },
        {
          question: "On a scale of 1-10, how motivated are you to quit?",
          options: [
            "1-3 (Not Ready)",
            "4-6 (Thinking About It)",
            "7-10 (Very Ready)",
          ],
          points: [1, 2, 4],
        },
      ],
      resultGuide: {
        "0-7":
          "You're Not Ready Yet! Speak to a Quit Coach to explore your motivation.",
        "8-15":
          "You're Thinking About Quitting! Join the program and get professional help.",
        "16+": "You're Absolutely Ready to Quit! Begin your quit journey today!",
      },
    },
  
    "oral-health": {
      nameTag: "ORAL HEALTH TEST",
      mainTitle: "Check Your Oral Health Risk",
      questions: [
        {
          question: "What type of tobacco do you use?",
          options: [
            "Smoking (Cigarettes/Bidis)",
            "Smokeless (Gutkha, Paan, Khaini)",
            "Both Smoking & Smokeless",
          ],
          points: [2, 3, 4],
        },
        {
          question:
            "Have you noticed white, red, or dark patches inside your mouth?",
          options: ["Yes", "No"],
          points: [4, 0],
        },
        {
          question:
            "Do you have frequent mouth ulcers or sores that take a long time to heal?",
          options: ["Yes", "No"],
          points: [3, 0],
        },
        {
          question:
            "Do you experience burning sensation, pain, or stiffness while eating spicy food?",
          options: ["Yes", "No"],
          points: [3, 0],
        },
        {
          question:
            "Has your mouth opening reduced in the last few months or years?",
          options: ["Yes", "No"],
          points: [4, 0],
        },
        {
          question:
            "Do you suffer from bad breath, bleeding gums, or loose teeth?",
          options: ["Yes", "No"],
          points: [3, 0],
        },
        {
          question:
            "Have you ever been diagnosed with Oral Submucous Fibrosis (OSMF), Leukoplakia, or Oral Cancer?",
          options: ["Yes", "No"],
          points: [5, 0],
        },
        {
          question:
            "Have you noticed any lumps, swelling, or thickening in your cheeks, gums, or tongue?",
          options: ["Yes", "No"],
          points: [4, 0],
        },
        {
          question:
            "Have you ever had white or red patches that bled when touched or scraped?",
          options: ["Yes", "No"],
          points: [5, 0],
        },
        {
          question:
            "Do you frequently feel numbness, pain, or tingling in your tongue or lips?",
          options: ["Yes", "No"],
          points: [3, 0],
        },
      ],
      resultGuide: {
        "0-4": "Low Risk — Regular Screening Recommended.",
        "5-10": "Moderate Risk — Get Checked Immediately!",
        "11-15": "High Risk — Seek Medical Attention Now!",
        "16+": "Critical Risk — Urgent Medical Intervention Required!",
      },
    },
  
    "four-finger": {
      nameTag: "FOUR FINGER TEST",
      mainTitle: "Check for Early Signs of OSMF",
      question: "How many fingers fit vertically inside your mouth?",
      options: [
        "4 Fingers (Normal)",
        "3 Fingers (Early OSMF)",
        "2 Fingers (Moderate OSMF)",
        "1 Finger or Less (Severe OSMF)",
      ],
      results: {
        "4 Fingers": "Normal Mouth Opening. Continue regular screenings.",
        "3 Fingers":
          "Mild Restriction — Early OSMF. Quit immediately and seek therapy.",
        "2 Fingers":
          "Moderate Restriction — Advanced OSMF. Specialist consultation required.",
        "1 Finger or Less":
          "Severe Restriction — High risk of cancer. Urgent medical intervention required.",
      },
    },
    symptoms: {
      nameTag: "SYMPTOMS TEST",
      mainTitle: "Check for Symptoms of Tobacco-Related Illness",
      instructions:
        "Answer each question honestly. Each 'Yes' adds 5 points to your score. For question 10, it still adds 5 points as a high-risk condition.",
      sections: {
        respiratory: {
          title: "Respiratory Issues (Lung & Breathing Problems)",
          description:
            "🚬 Tobacco smoke damages the lungs, leading to chronic respiratory diseases like COPD and lung infections.",
          questions: [
            {
              question: "Do you often experience coughing, especially in the morning?",
              points: [0, 5],
            },
            {
              question: "Do you frequently cough up phlegm or mucus?",
              points: [0, 5],
            },
            {
              question: "Do you have shortness of breath even with mild physical activity?",
              points: [0, 5],
            },
            {
              question: "Have you had episodes of wheezing or chest tightness?",
              points: [0, 5],
            },
            {
              question: "Have you been diagnosed with chronic bronchitis, emphysema, or COPD?",
              points: [0, 5],
            },
          ],
        },
        cardiovascular: {
          title: "Cardiovascular Health (Heart & Blood Pressure Issues)",
          description:
            "🚬 Tobacco narrows arteries, raises blood pressure, and increases the risk of heart attacks and strokes.",
          questions: [
            {
              question: "Do you have high blood pressure or hypertension?",
              points: [0, 5],
            },
            {
              question: "Have you ever felt chest pain, discomfort, or heart palpitations?",
              points: [0, 5],
            },
            {
              question: "Have you been diagnosed with high cholesterol or blocked arteries?",
              points: [0, 5],
            },
            {
              question: "Do your fingers, toes, or lips sometimes turn bluish (a sign of reduced oxygen levels)?",
              points: [0, 5],
            },
            {
              question: "Have you had a heart attack or stroke before?",
              points: [0, 5],
            },
          ],
        },
        oral: {
          title: "Oral Health Concerns",
          description:
            "🚬 Tobacco use leads to slow-healing ulcers, lesions, and long-term oral complications like leukoplakia and cancer.",
          questions: [
            {
              question: "Do you frequently have mouth ulcers or sores that take a long time to heal?",
              points: [0, 5],
            },
            {
              question: "Do you experience a burning sensation while eating spicy or hot food?",
              points: [0, 5],
            },
            {
              question: "Have you noticed white, red, or dark patches inside your mouth?",
              points: [0, 5],
            },
            {
              question: "Do you suffer from bleeding gums, bad breath, or loose teeth?",
              points: [0, 5],
            },
            {
              question: "Have you had a biopsy or diagnosis of precancerous oral lesions?",
              points: [0, 5],
            },
          ],
        },
      },
    }
    
  };
