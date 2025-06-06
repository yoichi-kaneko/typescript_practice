// 関数型について学習

const sayHello1 = (name: string): string => {
  return `Hello, ${name}!`;
}

const sayHello2 = (name: string, q: boolean): string => {
    return `Hello, ${name}${q ? '?' : '!'}`;
}

const sayHello3 : (name: string) => string = (personName: string): string => {
    return `Hello, ${personName}!`;
}

const logHello: () => void = () => {
    console.log("Hello, World!");
}
