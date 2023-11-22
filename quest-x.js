// x.[JavaScript][Level1] ループを使うことができる
// 1. 奇数が含まれるかの判定
// function hasOdd(numbers) {
//     for(let i = 0; i < numbers.length; i++){
//         if (numbers[i] % 2 !== 0){
//             console.log("True");
//             return true;
//         }
//     }
//     console.log("false");
//     return false;
//   }
// hasOdd([1, 2, 3, 4, 5])
// 2. 奇数の抽出
// function odd(numbers) {
//     let oddNumbers = [];
//     for(let i = 0; i < numbers.length; i++){
//         if (numbers[i] % 2 !== 0){
//             oddNumbers.push(numbers[i]);
//         }
//     }
//     console.log(`${oddNumbers}`)
//     return oddNumbers;
//   }
// odd([1, 2, 3, 4, 5])

// 3. 2乗の計算
function square(numbers){
    return numbers.map(number => number*number);
  }
console.log(square([1, 2, 3, 4, 5]))
