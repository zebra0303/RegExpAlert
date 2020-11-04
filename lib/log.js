// 로그 데이타 저장
exports.writeLog = (logFile, logData) => {
  const fs = require('fs');

  fs.writeFile(logFile, logData, err => {
    if (err === null) {
      console.log(`* 로그 저장 성공 : ${logData}`);
    } else {
      console.error(`* 로그 저장 실패 : ${logData}`);
    }
  });
};


// 로그 데이타 읽기
exports.readLog = logFile => {
  const fs = require('fs');
  if (fs.existsSync(logFile)) {
    return fs.readFileSync(logFile, 'utf8');
  }
  else {
    const { getUnixTime } = require('./date');
    return getUnixTime();
  }
}
