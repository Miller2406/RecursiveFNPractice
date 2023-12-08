const selfRepeat = (startNum, endNum) => {
  console.log(`count outside if : ${startNum}`);
  if (startNum < endNum) {
    console.log(`count inside if : ${startNum}`);
    const countArr = selfRepeat(startNum + 1, endNum);
    countArr.push(startNum);
    console.log(`countArr stack : ${countArr}`);
    return countArr;
  } else {
    console.log(`count inside else : ${startNum}`);
    return [startNum];
  }
};

console.log(selfRepeat(1, 5));
// This is call stack working procrsses
