// 型についての学習
// 文字列型
const firstName: string = "John"; // 文字列型
const lastName: string = "Doe"; // 文字列型
const fullName: string = `${firstName} ${lastName}`; // テンプレートリテラルを使用して文字列を結合
const newName = fullName; // 変数の再代入
const nameWithInt = fullName + 1; // 自動的に文字列型に変換される

// 数値型
const age: number = 30; // 数値型
const height: number = 175.5; // 小数点を含む数値型
const latitude: number = -35.6895; // マイナスの数値型

const nan: number = 0 / 0; // Nanを生成。number型
const infinity: number = 1 / 0; // Infinityを生成。number型
const negativeInfinity: number = -1 / 0; // -Infinityを生成。number型

// bigint型
// bigNumerのコンパイルを通すため、コマンドで `--target ES2020` を指定する必要があります。
const bigNumber: bigint = 900719921459n; // bigint型の数値。es2020でサポート
// `--target ES2020` を指定してもエラーになります
const invalidBigNumber: number = 900719921459n; // number型に代入しようとするとエラー

// boolean型
const isActive: boolean = true; // 真偽値型
const isComplete: boolean = false; // 真偽値型

const emptyString: boolean = ""; // 空文字列を代入しようとするとエラー
const zero: boolean = 0; // 数値の0を代入しようとするとエラー
const undefinedValue: boolean = undefined; // undefinedを代入しようとするとエラー。strictnullチェックが無効の場合エラーにならない