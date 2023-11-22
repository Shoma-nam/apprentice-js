// 1. DOM とは
// DOM とは何で、なんのためにあるのか、プログラミング初心者にわかるように説明してください。なお、DOM　とは API の一つなのですが、API とは何かも説明してください。
//DOM（Document Object Model）とは
// DOMは「Document Object Model」の略で、HTMLやXML文書の内容と構造をプログラム（特にウェブブラウザ）から読み書きできるようにするための標準的な方法です。DOMを使うと、プログラムは文書の各要素（タグ、テキスト、属性など）にアクセスし、それらを変更、追加、削除することができます。

// たとえば、ウェブページ上のテキストを動的に変更したり、ユーザーのアクションに応じて新しいHTML要素を追加したりすることが可能です。DOMはウェブページをよりインタラクティブにするために広く使われています。

// DOMの役割
// ウェブページの表現: HTMLやXML文書を木構造で表現し、各要素がノード（節点）として表されます。
// インタラクティビティの向上: JavaScriptなどのプログラミング言語を使って、文書の内容やスタイルを動的に変更できます。
// ウェブページの動的更新: ページ全体をリロードすることなく、特定の部分だけを更新できます。
// API（Application Programming Interface）とは
// APIは「Application Programming Interface」の略で、ソフトウェアやプログラムが互いに通信し合うためのインターフェース（接点・仕様）です。APIを使用することで、異なるソフトウェア間で機能やデータを共有し、一方が他方の機能を利用できるようになります。

// たとえば、ウェブサイトがソーシャルメディアのAPIを使用してユーザーのログイン情報を共有する場合、ユーザーはそのウェブサイトでソーシャルメディアのアカウントを使ってログインできるようになります。

// DOMはAPIの一種
// DOMはAPIの一種であり、ウェブページ（HTMLやXML文書）の各要素にプログラムからアクセスするための標準的な方法を提供します。これにより、開発者はウェブページの構造、スタイル、内容などをプログラムから操作できるようになります。

// 2. 要素ノードの変更
// h1 タグの要素を取得
// const h1Element = document.querySelector('h1');

// h1 タグのテキストを 'シンプルブログ' に変更
// h1Element.textContent = 'シンプルブログ';

// 3. イベントハンドラの設定
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('post-form');

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const title = document.getElementById('title').value;
//         const content = document.getElementById('content').value;

//         console.log('タイトル：', title);
//         console.log('本文：', content);
//     });
// });

// document.addEventListener("DOMContentLoaded",function(){
//     const form = document.getElementById("post-form");

//     form.addEventListener("submit",function(event) {
//             event.preventDefault();


//     });
// });

// 1.復習
// const h1_element = document.querySelector("h1");
// h1_element.textContent = "シンプルブログ"
// console.log(h1_element.textContent);

// 2.復習
// function()=onclick
// console.log();
// const elem = document.getElementById('submit');
// elem.onclick = function(event) {
//   event.preventDefault();
//   const title = document.getElementById('title').value;
//   const content = document.getElementById('content').value;

//   console.log('title');
//   console.log('content'); 
// };
var form = document.getElementById('post-form');

// submit イベントに対するイベントハンドラを設定
form.addEventListener('submit', function(event) {
    // デフォルトの送信動作を防止
    event.preventDefault();

    // タイトルと本文の入力値を取得
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;

    // コンソールに出力
    console.log('タイトル：', title);
    console.log('本文：', content);
});
// 変更
