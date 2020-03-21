
exports.min = function min (array) {
  if(!array || array.length == 0) return 0;
  let min = array[0];
  for(let element of array){
    min = element < min ? element : min;
  }
  return min;
}

exports.max = function max (array) {
  if(!array || array.length == 0) return 0;
  let max = array[0];
  for(let element of array){
    max = element > max ? element : max;
  }
  return max;
}

exports.avg = function avg (array) {
  if(!array || array.length == 0) return 0;
  return array.reduce((a,b) => a +=b) / array.length;
}