// typescriptのインターフェースについて学習

interface Person {
    name: string;
    age: number;
}

const person: Person = {
    name: "Alice",
    age: 30,
}

const greet = (person: Person): string => {
    return `Hello, ${person.name}! You are ${person.age} years old.`;
}
