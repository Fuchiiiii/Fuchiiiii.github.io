const urls = [
  "https://abehiroshi.la.coocan.jp/",
  "https://abehiroshi.la.coocan.jp/",
  "https://abehiroshi.la.coocan.jp/",
  "https://abehiroshi.la.coocan.jp/",
  "https://abehiroshi.la.coocan.jp/",
  "https://abehiroshi.la.coocan.jp/",
  "https://abehiroshi.la.coocan.jp/",
  "https://abehiroshi.la.coocan.jp/",
  "https://abehiroshi.la.coocan.jp/",
  "https://abehiroshi.la.coocan.jp/"
];

// document.querySelector('.hamburger').addEventListener('click', function(){
//     this.classList.toggle('active');
//     document.querySelector('.slide-menu').classList.toggle('active');
// })

// ボタンの要素を取得
const button = document.getElementById("extra_button");
const button2 = document.getElementById("extra_button2");

// ボタンがクリックされたらアラートを出す
button.addEventListener("click", () => {
     // 確認ダイアログを表示
    const result = window.confirm('本当に閲覧しますか？');

    // ユーザーの選択で分岐
    if (result) {
      const result = window.confirm('本当の本当に閲覧しますか？');
      if(result){
        const result = window.confirm('そんなにみたいの？');
        if(result){
            const result = window.confirm('じゃあ見せてあげます');
            if(result){
                button2.style.display = 'inline-block'; // 表示させる
            }
        }
      }
    }
  });

button2.addEventListener('click', () => {
  urls.forEach(url => {
                window.open(url, '_blank');
                });
});