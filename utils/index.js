export const SEDENTARY_DEFAULTS = {
  STEPS_GOAL : 100,
  LIMIT_IN_MINS : 45,
  VALID_FROM : 8 * 60,
  VALID_TO : (8 + 12) * 60
}

let sedentaryState = null;

export function getSedentaryState() {
  if(sedentaryState == null) {
    sedentaryState = {
      activitySoFar: 0, //steps
      activityNeeded: SEDENTARY_DEFAULTS.STEPS_GOAL, //steps
      lastActive: 0,  //UTC time
      alertIn: 0, //UTC time
    }
  }
  return sedentaryState;
}