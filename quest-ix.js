// ix.[JavaScript][Level1] 関数を定義し使うことができる
// 1. 温度チェッカー
function checkTemperature(t) {
    if(t >= 30){
        console.log("Hot");
    }
    else if(t >= 15){
        console.log("Warm");
    }
    else{
        console.log("Cold");
    }
}
checkTemperature(30)

// t が 30 以上の場合は "Hot"
// t が 30 未満かつ 15 以上の場合は "Warm"
// t が 15 未満の場合は "Cold"

// 2. 偶数チェッカー
function checkOddOrEven(n) {
    if(n % 2 === 0){
        console.log("Even")
    }
    else {
        console.log("Odd")
    }
  }
checkOddOrEven(2)
// n が偶数の場合は "Even"、奇数の場合は "Odd" を出力してください。