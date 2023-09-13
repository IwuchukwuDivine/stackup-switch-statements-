let calcBtn = document.getElementById('calculate');
let inputNumbers = document.getElementById('main-input');
let outPut = document.getElementById('output');

calcBtn.addEventListener('click', () => {
  let list = inputNumbers.value;
  // to remove spaces incase the user didnt enter the nummbers well ie 1,  2,3,4,  5
  list = list.replaceAll(" ", "");

  // to convert to an array of substrings
  list = list.split(",");

  // to convert the strings to integer so as to perform calculations
  list = list.map((number, index) => {
    return parseInt(number);
  })

  let operator = document.getElementById('operator').value;
  switch (operator) {

    case "sum":
      let sum = 0;
      list.forEach((item) => {
        sum += parseInt(item);
      });
      outPut.innerHTML = sum;
      break;

    case "average":
      let add = 0;
      let avg;
      list.forEach((item) => {
        add += parseInt(item);
        avg = parseInt(add / list.length);
      });
      outPut.innerHTML = avg;
      break;

    case "min":
      let min = list[0];
      list.forEach((item) => {
        if (item < min) {
          min = item;
        }
      })
      outPut.innerHTML = min;
      break;
      
    case "max":
      let max = list[0];
      list.forEach((item) => {
        if (item > max) {
          max = item;
        }
      })
      outPut.innerHTML = max;
      break;
     
    case "median":
      // to arrange the numbers in ascending order
      let mid = Math.floor(list.length / 2);
      list = list.sort(function(a, b) {return a-b});
      if (list.length % 2 != 0) {
        outPut.innerHTML = list[mid];
      } else {
        let median = (list[list.length / 2]) + (list[(list.length/2) - 1]);
        median = median / 2;
        outPut.innerHTML = median;
      }
      
    case "range":
      let maximum = list[0];
      let minimum = list[0]

      list.forEach((item) => {
        if (item > maximum) {
          maximum = item;
        } 
        if (item < minimum) {
          minimum = item;
        }
      });
      outPut.innerHTML = maximum - minimum;
      break;

    case "mode":
      let mode = {};
      let frequent = 0;
      let count = 0;
      list.forEach((item) => {
        if (mode[item]) {
          mode[item] ++;
        } else {
          mode[item] = 1;
        }

        if (count < mode[item]) {
          frequent = item;
          count = mode[item];
        }
      });
      outPut.innerHTML = frequent;
      break;

    default: 
      outPut.innerHTML = "Invalid Operator";
      break
 
    }

 })