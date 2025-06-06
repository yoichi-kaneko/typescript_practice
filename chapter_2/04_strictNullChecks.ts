/*
 * strictNullChecksオプションの値によるコンパイルの結果の違いを確認するためのコード
 * `tsc strictNullChecks.ts --strictNullChecks true|false` で違いを検証する
 */

let strictNullCheckString: string = "Hello, World!"; // string型

strictNullCheckString = null; // strictNullChecksがtrueの場合、エラー。falseの場合は許可される
strictNullCheckString = undefined; // strictNullChecksがtrueの場合、エラー。falseの場合は許可される

