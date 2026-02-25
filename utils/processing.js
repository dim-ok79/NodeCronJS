const { execSync } = require('child_process');

function cmdExe(cmdText, dir) {
    let params = {encoding: 'utf-8' };
    if (dir && dir.length>3){
        params.cwd = dir;
    }
    params.stdio = ['ignore','ignore','ignore'];
    console.log('params=', params);
//    output = execSync(cmdText, {cwd: dir, encoding: 'utf-8' });
    output = execSync(cmdText, params);
    return output;
}

module.exports.cmdExe = cmdExe;
