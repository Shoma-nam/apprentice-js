// xii.[JavaScript][Level1] オブジェクトを使うことができる
// 1. 書籍プリンター
function printBooks(books) {
    for (let i = 0; i < books.length; i++) {
        console.log(`『${books[i].title}』${books[i].name}`);
    }
  }

books = [ 
    {title:"『JavaScript入門』",name:"山田太郎"},
    {title:"『JavaScriptの絵本』",name:"山田次郎"}
];
printBooks(books);

//   function printBooks(books) {
//     for (let i = 0; i < books.length; i++) {
//         console.log(`『${books[i].title}${books[i].author}`);
//     }
// }

// const books = [
//     { title: "JavaScript入門", author: "山田太郎" },
//     { title: "JavaScriptの絵本", author: "山田次郎" }
// ];

// printBooks(books);


// 2. ユーザーパーミッションチェッカー

// function checkPermission(username, permission) {
//     // 関数を完成させてください
//   }
//   checkPermission('山田', 'canWrite')


// 3. メソッド