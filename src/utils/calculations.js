// BMI Calculator
export const calculateBMI = (weight, height) => {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
};

// Calorie Calculator (Harris-Benedict Equation)
export const calculateCalories = ({ gender, weight, height, age, activityLevel }) => {
  let bmr;
  
  if (gender === 'male') {
    bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else {
    bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  }

  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    veryActive: 1.9
  };

  return bmr * activityMultipliers[activityLevel];
};

// Ideal Weight Calculator (Modified Hamwi Formula)
export const calculateIdealWeight = ({ gender, height }) => {
  const heightInInches = height / 2.54;
  const baseHeight = 60; // 5 feet in inches
  let baseWeight;
  let weightPerInch;

  if (gender === 'male') {
    baseWeight = 48; // kg
    weightPerInch = 2.7; // kg
  } else {
    baseWeight = 45.5; // kg
    weightPerInch = 2.2; // kg
  }

  const idealWeight = baseWeight + (weightPerInch * (heightInInches - baseHeight));
  
  return {
    min: idealWeight * 0.95,
    max: idealWeight * 1.05
  };
};