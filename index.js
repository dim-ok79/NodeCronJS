const cron = require('node-cron');
var config = require('./utils/config');
var processing = require('./utils/processing');
var api = require('./utils/api');
let cfg = config.configLoad();

// console.log('cfg=', cfg);
function start(){
    cfg.forEach(item => {
        console.log('add CRON:', `${item.minutes} ${item.hours} ${item.day} ${item.month} ${item.day_week}`);
        cron.schedule(`${item.minutes} ${item.hours} ${item.day} ${item.month} ${item.day_week}`, () => {
                if (item.cmdList && item.cmdList.length>0) {
                    item.cmdList.forEach((itemCmdList, index) => {
                        console.log('itemCmdList=', index, itemCmdList);
                        console.log('res=', index, processing.cmdExe(itemCmdList.cmd, itemCmdList.dir));
                    })
                }
                if (item.urlList && item.urlList.length>0) {
                    api.urlS(item.urlList);
                }

            },
            {
                scheduled: true,
                timezone: "Europe/Moscow"
            });

    })
}


start();

/*  ТЕСТ
cron.schedule('41 * * * *', () => {
    console.log('Эта задача выполняется в 25: ' + new Date().toLocaleTimeString());
    const res = processing.cmdExe('pm2 stop ProxyServerTS');
    console.log('res=', res);
    const res2 = processing.cmdExe('pm2 start ProxyServerTS');
    console.log('res2=', res2);
});
*/
