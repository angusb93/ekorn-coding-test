import type { Scores } from './data';

export const calculateAge = (birthdateString: string): number => {
  const birthdate = new Date(birthdateString);

  // Handle if date string doesnt parse. return 0.
  // I would like to be able to return null here or throw an error.
  if (isNaN(birthdate.getTime())) {
    console.error(`Couldn't parse birthdate: "${birthdateString}"`);
    return 0;
  }

  const today = new Date();
  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDifference = today.getMonth() - birthdate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  return age;
};

export const calculateAverageScore = (scores: Scores): number => {
  const numbers = Object.values(scores).filter(Number.isFinite);
  if (numbers.length === 0) {
    console.error(`Cannot parse scores`);
    return 0;
  }

  const total = numbers.reduce((sum, n) => sum + n, 0);
  return Math.round(total / numbers.length);
};
