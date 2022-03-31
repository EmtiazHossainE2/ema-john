const items = [
    { id: "c222", name: "coffee" },
    { id: "t333", name: "tea" },
    { id: "j555", name: "juice" }
]

const item = items.filter(item => item.id !== "j555");
console.log(item);