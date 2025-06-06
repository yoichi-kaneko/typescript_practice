// void型の学習
const undefinedVal2: undefined = undefined; // undefined型
const voidVal: void = undefined; // void型

if (undefinedVal2) {
    console.log('undefinedVal2 is not undefined');
}

// void型は値を持たないことを示すため、エラーとなる
if (voidVal) {
    console.log('voidVal is not undefined'); // ここは実行されない
}
