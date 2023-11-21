import axios from "axios";
import api from "./api-interceptor";

export const loginHook = (values, callback) => {
  const data = JSON.stringify({
    email: values.email,
    password: values.password,
  });
  api
    .post("/users/authenticate", data)
    .then(function (response) {
      console.log("response auth", response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
};

export const signupHook = (values, callback) => {
  const data = JSON.stringify({
    email: values?.email,
    firstName: values.firstName,
    lastName: values?.lastName,
    password: values.password,
    confirmPassword: values?.confirmPassword,
  });
  api
    .post("/users/register", data)
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
};

export const getUserInfoHook = (callback) => {
  api
    .get("/users/me")
    .then(function (response) {
      callback(response?.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
  //   const authToken = localStorage.getItem("authToken");
  //   const config = {
  //     method: "get",
  //     url: `${process.env.REACT_APP_API}/auth/me`,
  //     headers: {
  //       Authorization: `Bearer ${authToken}`,
  //     },
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       callback(response?.data?.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       callback(error);
  //     });
};

export const updateUserHook = (values, callback) => {
  const data = JSON.stringify({
    email: values?.email,
    firstName: values.firstName,
    lastName: values?.lastName,
    country: values?.country,
    phoneNumber: values?.phoneNumber,
  });
  api
    .put("/users/update", data)
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
};

export const updatePasswordHook = (values, callback) => {
  const data = JSON.stringify({
    userId: values?.userId,
    password: values.password,
    confirmPassword: values?.confirmPassword,
  });
  api
    .post("/users/update-password", data)
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
};

export const getPaymentPlansHook = (callback) => {
  api
    .get("/payments/plans")
    .then(function (response) {
      callback(response?.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
};

export const subscribeToPlan = (planId, callback) => {
  api
    .post("/payments/createStripeSession", {
      planId: planId,
    })
    .then(function (response) {
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
};

export const getBooksCreated = (userId, callback) => {
  const token = localStorage.getItem("authToken");
  let getDataStatus = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_PY_API}/user/usage?customer_id=652cfcb78722982a0bf49cea`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  axios.request(getDataStatus).then((data) => {
    console.log("Total Book Used", data);
  });
};

// subscribeToPlan = (planId) => {
//   return this.httpClient.post(
//     `${environment.apiurl}/payments/createStripeSession`,
//     { planId }
//   );
// };
