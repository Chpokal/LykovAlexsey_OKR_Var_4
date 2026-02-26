const data = [
    { category: 'food', value: 100 },
    { category: 'game', value: 50 },
    { category: 'food', value: 75 },
    { category: 'gambling', value: 120 },
    { category: 'game', value: 30 },
    { category: 'food', value: 200 },
    { category: 'gambling', value: 80 }
];

const result = {};

data.forEach(item => {
    const { category, value } = item;
    result[category] = (result[category] || 0) + value;
});

console.log(result);