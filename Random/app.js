const elem = document.querySelector("#num")
let intro = null;

document.getElementById("start-btn").addEventListener("click", function(e){
    if(e.cancelable) {
        // デフォルトの挙動をキャンセル
        e.preventDefault();
    }

    intro = setInterval(() => {
        elem.textContent = Math.floor(Math.random() * 101);
    },100);
});

document.getElementById("stop-btn").addEventListener("click", function(e){
    if(e.cancelable) {
        // デフォルトの挙動をキャンセル
        e.preventDefault();
    }
    clearInterval(intro);
});