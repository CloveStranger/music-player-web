export default function configMusicTime(timeInfo: number) {
  let seconds: number | string = parseInt(timeInfo.toString());
  let minutes: number | string = 0;
  let hours: number | string = 0;
  let resultText = "";
  if (seconds >= 60) {
    minutes = parseInt((seconds / 60).toString());
    seconds = seconds % 60;
    if (minutes >= 60) {
      hours = parseInt((minutes / 60).toString());
      minutes = minutes % 60;
    }
  }

  if (hours !== 0) {
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    resultText = `${hours}:${minutes}:${seconds}`;
  } else {
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    if (minutes !== 0) {
      resultText = `${minutes}:${seconds}`;
    } else {
      resultText = `00:${seconds}`;
    }
  }

  return resultText;
}
