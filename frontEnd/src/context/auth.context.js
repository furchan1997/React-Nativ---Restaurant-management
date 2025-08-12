import { useState, createContext, useContext } from "react";
import bizUserServiceObj from "../../services/bizUserService";
import { statusCodes, errorMsgForClient } from "../constants/statusCodes";
const AuthContext = createContext();

export function AuthProvider({ children }) {
  //   const [bizUsers, setBizUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  const signUp = async (values) => {
    setError(null);
    setLoading(false);

    try {
      setLoading(true);
      const response = await bizUserServiceObj.signUp(values);
      if (response?.status === 200 || response?.status === 201) {
        setSuccess(true);
      }
      return response.data.detailes;
    } catch (err) {
      errorMsgForClient(err?.response?.status, setError);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const login = async (values) => {
    setError(null);
    setLoading(false);

    try {
      setLoading(true);
      const response = await bizUserServiceObj.login(values);
      if (response?.status === 200 || response?.status === 201) {
        setSuccess(true);
      }
      return response.data;
    } catch (err) {
      errorMsgForClient(err?.response?.status, setError);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {};

  return (
    <AuthContext.Provider value={{ error, loading, success, login, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
