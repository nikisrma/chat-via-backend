// response.js
const successResponse = (res, message, data = null) => {
  return res.status(200).json({
    success: true,
    message: message,
    data: data,
  });
};

const errorResponse = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    message: message,
  });
};

module.exports = {
  successResponse,
  errorResponse,
};
