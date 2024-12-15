fetch("input/03.txt")
  .then((res) => res.text())
  .then((text) => {
    convertCodePartTwo(text);
  })
  .catch((e) => console.error(e));

function convertCode(giveMeData) {
  const regexp = /mul\((\d+),(\d+)\)/gi;
  const str = [...giveMeData.matchAll(regexp)];

  const results = [];
  let match;
  let result = 0;
  while ((match = regexp.exec(str)) !== null) {
    results.push([parseInt(match[1]), parseInt(match[2])]);
  }

  results.forEach((element) => {
    result += element[0] * element[1];
  });

  console.log(result);
}

function convertCodePartTwo(giveMeData) {
  const regexp = /(do|don't)\(\)|(mul\((\d+),(\d+)\))/gi;
  const str = [...giveMeData.matchAll(regexp)];

  const results = [];
  let match;
  let result = 0;
  let flag = true;

  while ((match = regexp.exec(str)) !== null) {
    if (new String(match[0]) == "do()") {
      flag = true;
    } else if (new String(match[0]) == "don't()") {
      flag = false;
    }

    if (match[3] !== undefined && match[4] !== undefined && flag == true) {
      results.push([parseInt(match[3]), parseInt(match[4])]);
    }
  }

  results.forEach((element) => {
    result += element[0] * element[1];
  });

  console.log(result);
}
