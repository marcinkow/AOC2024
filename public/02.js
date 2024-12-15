fetch("input/02.txt")
  .then((res) => res.text())
  .then((text) => {
    convertCodePartTwo(text.split("\n"));
  })
  .catch((e) => console.error(e));

function convertCode(giveMeData) {
  let eachLine = [];
  giveMeData.forEach((element) => {
    const line = element.split(" ");
    eachLine.push(line);
  });

  let result = 0;
  eachLine.forEach((lineElement) => {
    console.log(lineElement);
    for (let i = 1; i < lineElement.length; i++) {
      const aquesion = Math.abs(
        Number(lineElement[i - 1]) - Number(lineElement[i])
      );

      if (
        checkIsIncDec(lineElement[i - 1], lineElement[i], lineElement[i + 1])
      ) {
        if (aquesion == 1 || aquesion == 2 || aquesion == 3) {
          if (i + 1 == lineElement.length) {
            result += 1;
          }
        } else {
          console.log("Blad 1 " + lineElement[i - 1] + " " + lineElement[i]);
          break;
        }
      } else {
        console.log(
          "Blad 2 " +
            lineElement[i - 1] +
            " " +
            lineElement[i] +
            " " +
            lineElement[i + 1]
        );
        break;
      }
    }
  });

  console.log(result);
}

function convertCodePartTwo(giveMeData) {
  let eachLine = [];
  giveMeData.forEach((element) => {
    const line = element.split(" ");
    eachLine.push(line);
  });

  let result = 0;
  eachLine.forEach((lineElement) => {
    let oneLife = 0;

    for (let i = 2; i <=lineElement.length; i++) {
      const aquesion = Math.abs(
        Number(lineElement[i - 2]) - Number(lineElement[i-1])
      );

      if (
        checkIsIncDec(lineElement[i - 2], lineElement[i-1], lineElement[i])
      ) {
        if (aquesion == 1 || aquesion == 2 || aquesion == 3) {
          if (i  == lineElement.length) result += 1;
        } else {
          oneLife++;
          if (Number(oneLife) > 1) break;
        }
      } else {
        oneLife++;
        if (Number(oneLife) > 1) break;
      }
    }
  });

  console.log(result);
}

function checkIsIncDec(first, second, third) {
  if (third === undefined) {
    return true;
  } else if (Number(first) > Number(second) && Number(second) > Number(third))
    return true;
  else if (Number(first) < Number(second) && Number(second) < Number(third))
    return true;
  else return false;
}
