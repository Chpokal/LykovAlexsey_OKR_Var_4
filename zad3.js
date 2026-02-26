function getAllCities(countries) {
    return Object.values(countries).flat().join(', ');
}

const countries = {
    Россия: ['Москва', 'Омск', 'Воронеж'],
    США: ['Вашингтон', 'Огайо', 'Чикаго'],
    Беларусь: ['Минск', 'Барановичи', 'Смолевичи']
};

const result = getAllCities(countries);
console.log(result);