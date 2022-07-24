//es2015以降に登場したのがclass構文
//javascriptのclassはあくまでプロトタイプベースの継承の
//糖衣構文
//あくまでコンストラクタ関数を見栄えよく書いただけ
//設計図
class Monster {
//インスタンス化されたときに最初に実行されるもの
//初期化
    constructor(name,type){
        this.name = name;
        this.type = type;
        this.hp = 1;
    }
//メソッド
    explanation(){
        console.log(`${this.name}は${this.type}のポケモンです`);
    }
    hpUp(){
        this.hp++;
        console.log(`${this.name}はHPが${this.hp}になった`);
    }
}

//インスタンス化
const fushigidane = new Monster("フシギダネ", "くさ＆どく");
fushigidane.explanation();
fushigidane.hpUp();
const hitokage = new Monster("ヒトカゲ","ほのお");
hitokage.explanation();
hitokage.hpUp();

class Trainer {
    constructor(name, nickName) {
        this.name = name;
        this.nickName = nickName;
    }
    greet() {
        console.log(`こんにちは~、${this.name}です。よろしく！`);
    }
    showNickName() {
        console.log(`ニックネームは、${this.nickName}です。`);
    }
    info() {
        console.log(`${this.name}は〇〇地方出身です`);
    }
}

class WomanTrainer extends Trainer {
    constructor(name, nickName) {
        super(name);
        this.nickName = nickName;
    }
    //オーバーライド
    info() {
        console.log(`${this.name}のニックネームは${this.nickName}です`);
    }
    greet() {
        super.greet();
    }
}

class childTrainer extends WomanTrainer {
    constructor(name, nickName, childName) {
        super(name, nickName);
        this.childName = childName;
    }
}
const child = new childTrainer("こども", "kids", "children");
console.log(child.childName);
console.log(child.nickName);
const woman = new WomanTrainer("ムサシ", "キャンディームサリーナ");
woman.greet();
woman.showNickName();