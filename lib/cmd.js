// 터미널 플래그 값 리턴
exports.parseCliFlagValue = flagName => {
  const flag = process.argv
    .find(argument => argument.indexOf(`--${flagName}=`) > -1);

  if (flag) {
      return flag.slice(flag.indexOf('=') + 1);
  }

  return undefined;
};
