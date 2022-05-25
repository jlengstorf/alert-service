exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({
      status: 'degraded',
      message: "We're seeing degraded service on...",
    }),
  };
};
