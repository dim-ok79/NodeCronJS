const axios = require('axios');

/* выполнение запроса URL */
async function urlGET(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return 'Ошибка запроса:' + error;
    }
}

async function urlPOST(url) {
    try {
        const response = await axios.post(url);
        return response.data
    } catch (error) {
        return 'Ошибка запроса:' + error;
    }
}


async function urlS(urlList) {
    for (const urlItem of urlList) {
        try {

            if (urlItem.typeUrl == 'GET') {
                const response = await axios.get(urlItem.url);
                console.log(`Запрос GET к ${urlItem.url} выполнен. Результат: ${JSON.stringify(response.data)}`);
            }
            if (urlItem.typeUrl == 'POST') {
                const response = await axios.post(urlItem.url);
                console.log(`Запрос POST к ${urlItem.url} выполнен. Статус: ${JSON.stringify(response.data)}`);
            }
            // Обработка данных response.data
        } catch (error) {
            console.error(`Ошибка при запросе к ${urlItem.url}:`, error.message);
        }
    }
}

module.exports.urlGET = urlGET;
module.exports.urlPOST = urlPOST;
module.exports.urlS = urlS;
