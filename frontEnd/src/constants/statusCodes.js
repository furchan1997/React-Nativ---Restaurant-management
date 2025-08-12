export const statusCodes = [
  { status: 204, message: "All good, but there’s nothing to show right now" },
  {
    status: 400,
    message: "Hmm… something’s off. Please check your details and try again",
  },
  { status: 401, message: "Please log in to continue" },
  { status: 403, message: "Looks like you’re not allowed to do that" },
  { status: 404, message: "We couldn’t find what you were looking for" },
  { status: 409, message: "This already exists in our system" },
  {
    status: 422,
    message: "Some details aren’t quite right. Please fix them and try again",
  },
  {
    status: 500,
    message: "Oops! Something went wrong on our side. Try again later",
  },
  { status: 502, message: "Bad connection to the server. Please try again" },
  {
    status: 503,
    message:
      "Service is temporarily unavailable. Hang tight and try again soon",
  },
  { status: 504, message: "It’s taking too long… please try again" },
];

export const errorMsgForClient = (RESPONSE_STATUS, RESULT = () => {}) => {
  const statusCodesOpt = statusCodes
    .filter((error) => error.status === RESPONSE_STATUS)
    .map((msg) => {
      return {
        code: msg.status,
        message: msg.message,
      };
    });

  if (statusCodesOpt.length > 0) {
    const _errorMsgForClient = statusCodesOpt
      .map((res) => res.message)
      .join("\n");
    RESULT(_errorMsgForClient); // שולח string, לא מערך
  } else {
    RESULT("אירעה שגיאה בלתי צפויה");
  }
};
