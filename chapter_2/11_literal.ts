// リテラルについての学習
// リテラルは、値を直接表現するための構文です。

const stringLiteral: 'Hello, World' = 'Hello, World'; // 文字列リテラル
const invalidStringLiteral: 'Hello, World' = 'Hello, TypeScript'; // エラー: 型 '"Hello, TypeScript"' を型 '"Hello, World"' に割り当てることはできません。

const numberLiteral: 42 = 42; // 数値リテラル
const invalidNumberLiteral: 42 = 100; // エラー: 型 '100' を型 '42' に割り当てることはできません。

stringLiteral.toUpperCase(); // 'HELLO, WORLD' として使用可能

// constとletのリテラルの違い
// constの場合
const constName1 = 'Alice'; // 文字列リテラル
const constName2 = 'Bob'; // 文字列リテラル

const constSayHello = (personName: 'Alice') => {
    console.log(`Hello, ${personName}!`);
};

constSayHello(constName1); // 'Hello, Alice!' と出力される
constSayHello(constName2); // エラー: 型 '"Bob"' を型 '"Alice"' に割り当てることはできません。

// letの場合
let letName1 = 'Alice'; // 文字列リテラル
let letName2 = 'Bob'; // 文字列リテラル

constSayHello(letName1); // エラー: 型 '"Alice"' を型 '"Alice"' に割り当てることはできません。
constSayHello(letName2); // エラー: 型 '"Bob"' を型 '"Alice"' に割り当てることはできません。
