// 最初のスクリプトを修正して、型エラーを発生させる例
function sum(a: number, b: number): number {
    return a + b;
}

sum(1, 'text'); // ここで型エラーが発生します
