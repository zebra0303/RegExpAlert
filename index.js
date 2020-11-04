// 체크할 항목들 ./checkList 폴더 안
const fs = require('fs');

const { parseCliFlagValue } = require('./lib/cmd');

// 입력 오류 체킹
const environment = parseCliFlagValue('env');
const action = parseCliFlagValue('act');

if (environment !== 'prod' && environment !== 'test') {
    let msg = '!!Error!! --env 플래그가 잘못 되었습니다.\n';
    msg += '바른예) node index.js --env=test act=(?:workReport|codeReview|TeamWeekly)';

    console.error(msg);
    return false;
}

if (!fs.existsSync(`./act/${action}.js`)) {
  console.error(`./act/${action}.js 파일이 존재하지 않습니다.`);

  return false;
}

require('dotenv').config({path: `.env.${environment}`});


  //console.debug(`./checkList/${item}`);
  const { genMessage } = require(`./act/${action}`);
  console.debug(genMessage());


