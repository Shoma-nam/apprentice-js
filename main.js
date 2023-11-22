const a = "バナナ";
console.log(a);

//変数に複数のデータを入れたい!!
const b = ["山田","17歳","福岡"];
console.log(b);

const c = {
    name:"山田",
    age:17,
    adress:"福岡",
}
console.log(c);

const d ={};
console.log(d);

//const e = new.Object();

const konan = {
    name:"コナン",
    age:7,
    address:"東京都",
    serif:"真実はいつもひとつ",
    friend:["元太","光彦","歩美","灰原"],
    friends:function(){
        return this.friend.length
    },
    hobby:{
        food:"レモンパイ",
        drink:"アイスコーヒー",
    }
}
console.log(konan);
console.log(konan.name);
console.log(konan.age);
console.log(konan.address);
console.log(konan.serif);
console.log(konan.friend[0]);
console.log(konan.friend[1]);
console.log(konan.friend[2]);
console.log(konan.friend[3]);
console.log(konan.hobby.food);
console.log(konan.hobby.drink);
console.log(konan.friends());

