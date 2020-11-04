// 정부 또는 슬랙 API URL 리턴
exports.getAPIURL = (opt, date) => {
  let url;

  if (opt === 'slack') {
    url =  `https://hooks.slack.com/services/${process.env.SLACK_WEBHOOK_KEY}`;
  }

  return url;
};

// 슬랙 메시지 제작
exports.genSlackMsg = (objError) => {
  return `{
    "blocks": [
      {
        "type": "header",
        "text": {
          "type": "plain_text",
          "text": "${objError.code}",
          "emoji": true
        }
      },
      {
        "type": "section",
        "text": {
          "type": "mrkdwn",
          "text": ":alert: ${objError.message}"
        }
      }
    ]
  }`;
};
