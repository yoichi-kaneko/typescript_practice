// 型推論についての学習
// TypeScriptは型推論を行うため、明示的に型を指定しなくても多くのケースで正しい型を推測します。

let userName = "Alice"; // string型として推論される
userName.toUpperCase(); // "ALICE"と出力される

let total = 100; // number型として推論される

const printTotal = (amount: number): void => {
    console.log(`Total amount is: ${amount}`);
}

printTotal(total); // "Total amount is: 100"と出力される

let isPositive = 0 < total; // boolean型として推論される

const printIsPositive = (flag: boolean): void => {
    console.log(`Is positive? ${flag}`);
}

printIsPositive(isPositive); // "Is positive? true"と出力される

const nameList = ["Alice", "Bob", "Charlie"]; // string[]型として推論される
nameList[0].toUpperCase(); // "ALICE"と出力される

const ageList = [25, 30, 35]; // number[]型として推論される
ageList[1].toUpperCase(); // エラー: number型にはtoUpperCaseメソッドがないため

const person3 = {
    name: "Eve",
    age: 28,
}

const person3Name: string = person3.name; // string型として推論される
const person3Age: number = person3.age; // number型として推論される
const person3Height: number = person3.height; // エラー: heightプロパティは定義されていないため

