export const parseDate = (time) => {
  debugger
  let date = new Date(time);
  return date.toDateString().slice(4)
}

export const shuffleVideos = (videos) => {
  debugger
  const shuffled = videos.slice();

  let currentIdx = shuffled.length;
  let swap = null;
  let randomIdx = null;

  while (0 !== currentIdx) {
    randomIdx = Math.floor(Math.random() * currentIdx);
    currentIdx -=1;

    swap = shuffled[currentIdx];
    shuffled[currentIdx] = shuffled[randomIdx];
    shuffled[randomIdx] = swap;
  }

  debugger
  return shuffled;
}

export const arraysEqual = (arr1, arr2) => {
  debugger
  if (arr1.sort().join(",") === arr2.sort().join(",")) {
    debugger
    return true;
  } else {
    debugger
    return false;
  }
}