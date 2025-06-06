/*
 * Node.jsで実行するためのTypeScriptコード
 * `npm run build` でコンパイル後、`npm run start` で実行される。
 * このコードではまだsayHello関数が実行されるのみ、今後書籍に従って機能を追加していく。
 */
const sayHello = (name: string): string => {
    return `Hello, ${name}!`;
}

console.log(sayHello("Alice"));
