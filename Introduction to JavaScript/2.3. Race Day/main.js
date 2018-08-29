let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnerAge = 16;

if (registeredEarly && runnerAge > 18) {
  raceNumber = raceNumber + 1000;
}

if (registeredEarly && runnerAge > 18) {
  console.log(`You will race at 9:30 AM, Race Number: ${raceNumber}`);
}
else if (!registeredEarly && runnerAge > 18) {
  console.log(`You will race at 11:00 AM, Race Number ${raceNumber}`);
}
else if (runnerAge < 18) {
  console.log(`You will race at 12:30 PM, Race Number ${raceNumber}`)
}
else {
  console.log(`Please see the registration desk`);
}


// https://www.youtube.com/watch?v=sSnUXjb_u-g