exports.showError = (response, options) => {
  console.error('호출 에러!!!');
  console.error(response.statusCode);
  console.error(options);
};
