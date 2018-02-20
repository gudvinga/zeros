module.exports = function getZerosCount(number) {
  let count = 0;
  function findFive(num) {
    if (num % 5 === 0 && num !== 0) {
      count++;
      findFive(num/5);
    }
  }

  for(let i = 0; i <= number; i += 5) {
    findFive(i);
  }

  return count;
}
