import { saveToken } from "./token";
import { httpService, setDefaultCommonHeaders } from "./httpsServise";

export async function login(values) {
  const response = await httpService.post("/api/biz/login/", values);

  const token = response.data.yourToken;
  if (token) {
    await saveToken(token);
    setDefaultCommonHeaders("x-auth-token", token);
  }

  return response;
}

export async function signUp(detailesForBizUser) {
  const response = await httpService.post(
    "/api/biz/sign-up",
    detailesForBizUser
  );

  return response;
}

const bizUserServiceObj = {
  login,
  signUp,
};

export default bizUserServiceObj;
