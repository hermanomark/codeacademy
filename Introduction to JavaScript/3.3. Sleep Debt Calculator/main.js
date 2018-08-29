const getSleepHours = (day) => {
  day = day.toLowerCase();
  
  if (day === 'monday') {
    return 5;
  }
  else if (day === 'tuesday') {
    return 5;
  }
  else if (day === 'wednesday') {
    return 5;
  }
  else if (day === 'thursday') {
    return 5;
  }
  else if (day === 'friday') {
    return 5;
  }
  else if (day === 'saturday') {
    return 5;
  }
  else if (day === 'sunday') {
    return 8;
  }
  else {
    return 'not a valid day'
  }
}

const getActualSleepHours = () =>
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');


console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
}

// console.log(getIdealSleepHours());

const calculateSleepDept = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('Got the perfect amount of sleep');
    console.log(`You slept ${actualSleepHours} hour(s) this week that's your ideal sleep hours!`);
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log('User got more sleep than needed');
    console.log(`You got ${actualSleepHours - idealSleepHours} hour(s) more sleep you needed this week. Please wakeup early!`);
  }
  else if (actualSleepHours < idealSleepHours) {
    console.log('User should get some rest!')
    console.log(`You got ${idealSleepHours - actualSleepHours} hour(s) less sleep than you needed this week. Get some rest.`);
  }
}

calculateSleepDept();

// https://www.youtube.com/watch?v=48ko-s_ePbc