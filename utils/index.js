import { Time } from "@zos/sensor";
import moment from "moment";

export const SEDENTARY_DEFAULTS = {
  STEPS_GOAL : 100,
  LIMIT_IN_MINS : 45,
  VALID_FROM : moment.duration(8, 'hours').asMinutes(),
  VALID_TO : moment.duration(8 + 12, 'hours').asMinutes(),
}

let sedentaryState = null;

export function getSedentaryState() {
  const time = new Time();
  const limitInMillis = moment.duration(SEDENTARY_DEFAULTS.LIMIT_IN_MINS, 'minutes').asMilliseconds();
  if(sedentaryState == null) {
    sedentaryState = {
      activitySoFar: 0,                               //steps
      activityNeeded: SEDENTARY_DEFAULTS.STEPS_GOAL,  //steps
      lastActive: 0,                                  //UTC time
      alertIn: time.getTime() + limitInMillis,        //UTC time
    }
  }
  return sedentaryState;
}

export function humanizeWithNow(other) {
  const delta = other - (new Time().getTime());
  return moment.duration(delta, "milliseconds").humanize(true, { s: 120, m: 60});
}