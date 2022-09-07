//変数
//昔からある変数
var x = "ピカチュウ";
//宣言は一度だけ、上書きはOK
let y = "ニョロモ";
//宣言は一度だけ、上書きNG
const z = "ワンリキー";
console.log(x);
console.log(y);
console.log(z);
if (true) {
var ifVar = "ifのなかでvar";
let ifLet = "ifのなかでLet";

const ifConst = "ifのなかでConst";
    ifLet = "let上書き";
    // ifConst = "const上書き";
}
console.log(ifVar);
// console.log(ifLet);
// console.log(ifConst);

//関数
//独自関数
function greeting1(name) {
    console.log(`こんにちは${name}さん`);
}
const greeting1_2 = greeting1("田中");

//無名関数
const greeting2 = function (name) {
    console.log(`こんにちは${name}さん`);
};
greeting2("山田");
//アロー関数
const greeting3 = (name) => {
    console.log(`こんにちは${name}さん`);
};
const greeting4 = () => console.log("引数なしだとこんなに省略できます");
greeting4();

    //オブジェクト=連想配列の話
//オブジェクトとはデータと機能の集合(変数(プロパティ)、関数(メソッド)表現される)
const monster = {
name: "ピカチュウ",
type: "せいでんき",
height: 0.4,
weight: 6.0,
explanation: function (name) {
    console.log(`${name}の特性は静電気です`);
},
};
console.log(monster.name);
console.log(monster["name"]);
monster.explanation("ライチュウ");

//オブジェクト指向
//ポケモンの数分、オブジェクトを作るのはメンテナンス性が悪い
//1つのテンプレート(設計図)のようなオブジェクトを用意して
//そこから量産(分身)を作っていくとメンテナンス性がよく、記述量
//も抑えられる。
//設計図・・・コンストラクタ関数(独自関数に似ている)
function Monster3(name, type) {
    this.name = name; //プロパティ
    this.type = type;
    this.hp = 1;
//メソッド
// this.explanation = function () {
//   console.log(`${this.name}は${this.type}のポケモンです`);
// };
// this.hpUp = function () {
//   this.hp++;
//   console.log(`${this.name}はHPが${this.hp}になった`);
// };
}
//インスタンス化(設計図から実態をつくる)
const fushigidane = new Monster3("フシギダネ", "くさ＆どく");
const hitokage = new Monster3("ヒトカゲ", "ほのお");
const zenigame = new Monster3("ゼニガメ", "みず");

//プロトタイプ
//自分が定義していなくてもあらかじめprototypeとよばれるオブジェクトに
//メソッドやプロパティがあり、それを継承している。
console.log(fushigidane);
Monster3.prototype.explanation = function () {
    console.log(`${this.name}は${this.type}のポケモンです`);
};
Monster3.prototype.hpUp = function () {
    this.hp++;
    console.log(`${this.name}はHPが${this.hp}になった`);
};
fushigidane.explanation();
fushigidane.hpUp();
fushigidane.hpUp();

//this
//トレーナー設計図
function Trainer(name) {
    this.name = name;
}
Trainer.prototype.info = function () {
    console.log(`${this.name}はカントー地方マサラタウン出身の
    ポケモンマスターを目指して旅するポケモントレーナーだ`);
};
Trainer.prototype.changeName = function (name) {
    const currentName = this.name;
    this.name = name;
    console.log(`${currentName}は${this.name}になった`);
};

//実態
const mainChar = new Trainer("サトシ");
mainChar.info();
mainChar.changeName("ムサシ");
//this自体はインスタンス化しているオブジェクトをさす。
//thisは乗っ取ることができる
const evoMonster = mainChar.changeName.bind(fushigidane);
evoMonster("フシギソウ");