function TodaysLunch() {
    let rand = Math.random() * 100;
    // console.log(rand);

    let rand_int = Math.floor(rand);
    // console.log(rand_int);

    if (rand_int < 5) {
        var 結果 = rand_int % 2;
        console.log(結果);
        var result = ['焼肉', '寿司'];
        console.log(result[結果]);
        var rare = "大当たり！ 今日は贅沢しちゃいましょう！";

    } else if (rand_int < 30) {
        var 結果 = rand_int % 4;
        console.log(結果);
        var result = ['海鮮丼', 'ピザ', '天丼', 'そば'];
        console.log(result[結果]);
        var rare = "当たり！ 私のお気に入りのご飯です！";

    } else {
        var 結果 = rand_int % 6;
        console.log(結果);
        var result = ['のり弁', 'ラーメン', 'オムライス', 'ハンバーガー', 'パスタ', 'カレー'];
        console.log(result[結果]);
        var rare = "普通！外れなんかない！";
    }

    document.querySelector("#gohan").innerHTML = ("あなたの今日の昼ご飯は");
    document.querySelector("#rare").innerHTML = rare;
    document.querySelector("#answer").innerHTML = result[結果];
    document.querySelector("#desu").innerHTML = ("です！");
    document.querySelector("img").src = result[結果] + '.jpg';

}