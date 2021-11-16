function getPalindrome(numb, amountCalls = 0) {
  const reverseNumb = Number(numb.toString().split(``).reverse().join(``));
  const sum = numb + reverseNumb;
  if (numb === reverseNumb) {
    return {
      result: numb,
      steps: amountCalls,
    };
  }
  return getPalindrome(sum, ++amountCalls);
}
console.log(getPalindrome(3)); // {result: 3, steps: 0}
console.log(getPalindrome(11)); // {result: 11, steps: 0}
console.log(getPalindrome(121)); // {result: 121, steps: 0}
console.log(getPalindrome(1001)); // {result: 1001, steps: 0}
console.log(getPalindrome(96)); // {result: 4884, steps: 4}
console.log(getPalindrome(312)); // {result: 525, steps: 1}
console.log(getPalindrome(48)); // {result: 363, steps: 2}
console.log(getPalindrome(89)); // {result: 8813200023188, steps: 24}

/* ---------------------------------------------------------------------------- */

// function getPalindrome(firstNum, amountCalls = 1) {
//   const propPalindrome = {};
//   const secondNum = Number(firstNum.toString().split(``).reverse().join(``));

//   /* Думал, что по условию ТЗ необходимо вести отсчёт от первой суммы натурального числа
//      и обращённого ему числа, поэтому и задал дефолтное значение параметра, равное '1',
//      учитывающее отсутствие проверки на палиндром параметра 'firstNum' и равное '1'
//      потому, что единожды функция в любом случае будет вызвана нами. */

//   const sum = firstNum + secondNum;
//   const resultSum = sum.toString();

//   /* И проверки через циклы можно было бы упразднить. Твой код с Telegram хорошо это
//      проиллюстрировал. Спасибо. Теперь знаю другой способ решения данной задачи! */

//   const reverseResult = [];
//   for (let i = resultSum.length - 1; i >= 0; i--) {
//     reverseResult.push(resultSum[i]);
//   }
//   for (let i = 0; i < resultSum.length; i++) {
//     if (resultSum[i] !== reverseResult[i]) {
//       return getPalindrome(sum, (amountCalls += 1));
//     }
//   }
//   propPalindrome.result = Number(resultSum);
//   propPalindrome.steps = amountCalls;
//   return propPalindrome;
// }

// /* Не делал эту проверку getPalindrome(3) для числа, являющегося палиндромом изначально,
//    до операции сложения; не увидел этого в условии ТЗ, но сделать, безусловно,стоило бы.
//    Теперь уяснил. */

// console.log(getPalindrome(3)); // {result: 6, steps: 1}
// console.log(getPalindrome(96)); // {result: 4884, steps: 4}
// console.log(getPalindrome(312)); // {result: 525, steps: 1}
// console.log(getPalindrome(48)); // {result: 363, steps: 2}
// console.log(getPalindrome(89)); // {result: 8813200023188, steps: 24}
