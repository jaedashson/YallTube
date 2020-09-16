export const parseDate = (time) => {
  let date = new Date(time);
  return date.toDateString().slice(4)
}

export const shuffleVideos = (videos) => {
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

  return shuffled;
}

export const arraysEqual = (arr1, arr2) => {
  if (arr1.sort().join(",") === arr2.sort().join(",")) {
    return true;
  } else {
    return false;
  }
}