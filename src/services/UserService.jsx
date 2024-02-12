import { myAxios } from "./helper";

export const signUp = (id, user) => {
  return myAxios
    .post(`register?id=${id}`, user)
    .then((response) => response.data);
};

export const sendOtp = (userMobileNumber) => {
  return myAxios
    .post(`send-otp?mobileNumber=${userMobileNumber}`, userMobileNumber)
    .then((response) => response.data);
};

export const loginUser = () => {};
