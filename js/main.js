function printArray(a) {
    document.write("[ ");
    for (let i = 0; i < a.length; i++) {
        document.write(`${objToString(a[i])}`);

        if (i != a.length - 1) {
            document.write(", ");
        }
    }
    document.write(" ]<br />");
}

function objToString(obj) {
    if (typeof obj == "object") {
        return `${obj.name}, ${obj.gender}, (${obj.age})`
    }
    return obj;
}

var arr = [1, 5, 7, 2, 0, -1, 8];
printArray(arr);

arr.push(13);
printArray(arr);

arr.push(17, 12, 42);
printArray(arr);

var el = arr.pop();
printArray(arr);
document.write(el + "<br />");

arr.unshift(1, 2, 3);
printArray(arr);

var el1 = arr.shift();
printArray(arr);
document.write(el1 + "<br />");

arr.sort();
printArray(arr);

arr.sort((a, b) => {
    return a - b;
});
printArray(arr);

var people = [
    {
        name: "Anna",
        gender: "female",
        age: 21
    },
    {
        name: "Grisha",
        gender: "male",
        age: 45
    },
    {
        name: "Sanya",
        gender: "male",
        age: 10
    },
    {
        name: "Olga",
        gender: "female",
        age: 60
    }
];


