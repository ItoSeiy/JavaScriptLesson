//setinterval
//一定間隔で処理を繰り返す

//htmlとjsをつなぐ。
const elem = document.querySelector("#greetmsg");
const greet = "こんにちは！ようこそ〇〇の世界へ。冒険の始まりです";

//greetの文字を分割する→split()
//配列に1文字ずつ入れるような分割の仕方。
// 例えばword配列にgreetの分割した文字を入れる場合word[0]は"こ"、word[1]は"ん"
//が入っているとする。
//終了条件は(cleaInterval)word.length-1とする。それまでsetIntervalを実行。
const word = greet.split("");
let i = 0;
console.log(word[0]);
const intro = setInterval(function () {
  elem.textContent += word[i];

  if (i == word.length - 1) {
    clearInterval(intro);
  }
  i++;
  //分割した文字をsetIntervalを使って0.5秒間隔で順番に表示していくようにする
}, 500);