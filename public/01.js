fetch("input/01.txt")
  .then((res) => res.text())
  .then((text) => {
     convertCodePartOne(text.split("\n"));
    convertCodePartTwo(text.split("\n"));
  })
  .catch((e) => console.error(e));

function convertCodePartOne(giveMeData) {
  const leftNumbers = [];
  const rightNumbers = [];
  let line = 0;
  let result = 0;

  giveMeData.forEach((element) => {
    line = element.split(/\s+/);
    leftNumbers.push(line[0]);
    rightNumbers.push(line[1]);
  });

  leftNumbers.sort();
  rightNumbers.sort();

  const loopNumber = leftNumbers.length;

  for (let i = 0; i < loopNumber; i++) {
    let distance = Math.abs(leftNumbers[i] - rightNumbers[i]);
    result += distance;
  }
  console.log("Part one:" + result);
}

function convertCodePartTwo(giveMeData) {
  const leftNumbers = [];
  const rightNumbers = [];
  let result = 0;

  giveMeData.forEach((element) => {
    const line = element.split(/\s+/);
    leftNumbers.push(line[0]);
    rightNumbers.push(line[1]);
  });

  leftNumbers.forEach(value => {
    const numberOfAppear = rightNumbers.filter(x => x == value).length;
    result += value * numberOfAppear;
    
    })
    console.log("Part two:" + result);
    
}