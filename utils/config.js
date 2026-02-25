const fs = require('fs');
const path = require('path');

/* Получить настройки */
function configLoad() {
        let jsonData = [];
//    jsonData.push({minutes: '*', hours: '*', day: '*', month: '*', day_week: '*', cmd:''});
        jsonData = JSON.parse(
            fs.readFileSync(path.join(__dirname, '../config.json'), 'utf-8')
        );

        return jsonData;
}


module.exports.configLoad = configLoad;
