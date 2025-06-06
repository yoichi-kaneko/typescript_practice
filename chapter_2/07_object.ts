// object型の学習

// TypeScriptの標準で定義されているobject型
// object型は、プリミティブ型以外のすべての値を表し、エラーとならない
const obj1 = {
    name: "Alice",
    age: 30,
}

const obj2: object = {
    isOpen: false,
};

const obj3: object = [1, 2, 3]; // 配列もobject型として扱われる
const obj4: object = new Date(); // Dateオブジェクトもobject型として扱われる
const obj5: object = null; // nullはobject型ではないため、--strictNullChecks trueをセットする事でエラーになる

// 書籍に記載されていた型定義を行うためのオブジェクトの記載方法
const newObj1: {
    name: string;
    age: number;
} = {
    name: "Bob",
    age: 25,
}

console.log(newObj1.height); // heightプロパティは定義されていないため、エラーになる

// heightプロパティがないためエラー
const newObj2: {
    name: string;
    age: number;
    height: number;
} = {
    name: "Charlie",
    age: 28,
}

// heightプロパティがオプションのため、エラーとならない
const newObj3: {
    name: string;
    age: number;
    height?: number;
} = {
    name: "David",
    age: 22,
}

const readOnlyObj: {
    readonly name: string;
    readonly age: number;
} = {
    name: "Eve",
    age: 26,
}

readOnlyObj.name = "Fred"; // 読み取り専用のプロパティは再代入できないためエラーになる
