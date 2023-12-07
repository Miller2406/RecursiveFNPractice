const selfRepeat = (startNum, endNums) => {
  console.log(`count outside if : ${startNum}`);
  if (startNum < endNums) {
    console.log(`count inside if : ${startNum}`);
    const countArr = selfRepeat(startNum + 1, endNums);
    countArr.push(startNum);
    console.log(`countArr stack : ${countArr}`);
    return countArr;
  } else {
    console.log(`count inside else : ${startNum}`);
    return [startNum];
  }
};

console.log(selfRepeat(1, 5));
