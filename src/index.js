module.exports = function zeros(expression) {


  let number = expression.split("*");
  let five = 0;
  let odd = 0;
  for (let i=0; i<number.length; i++) {
      let nums=multiplierToArray(number[i]);
      for (let num=0; num<nums.length; num++){
          five+=extractPow(nums[num], 5);
          odd+=extractPow(nums[num], 2);
      }
  }
  return Math.min(five, odd);
}

function extractPow(num, mul) {
  let ecx = 0;
  while (num % mul === 0) {
      if (num === 0) {
          break;
      }
      ecx++;
      num = Math.floor(num/mul);
  }
  return ecx;
}



//Разделяем множители на части
function multiplierToArray(number) {
  //создаем массив множителец
  var cofficients = [];
  var step = number.endsWith("!!") ? 2 : 1;
  var val=parseInt(number.replace("!", ""));
  while (val>0){
    cofficients.push(val);
      val-=step;
  }
  return cofficients;

}