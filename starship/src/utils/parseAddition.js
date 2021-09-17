const parseAddition = expression => {
  const arr = expression ? expression.toString().split('+') : [];

  if (arr.length === 0) return arr[0];

  let sum = 0;
  arr.forEach(item => (sum += parseInt(item)));

  if (isNaN(sum)) {
    return 'Invalid!';
  } else {
    return sum;
  }
};

export default parseAddition;
