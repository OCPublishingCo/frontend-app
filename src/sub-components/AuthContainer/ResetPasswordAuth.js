import React from "react";
import { ReactComponent as OcLogo } from "../../assets/svg-icons/transparentLogo.svg";
import logoImage from "../../assets/treehouse_no_bg.png";
import { Button, Col, Form, Input, Row, message } from "antd";
import "./AuthContainer.css";
import ComponentInput from "../../atoms/ComponentInput";
import ComponentButton from "../../atoms/ComponentButton";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  HOME_URL,
  LOGIN_URL,
  RESET_PASSWORD_URL,
  SIGN_UP_URL,
  VERIFY_ACCOUNT_URL,
  useRouter,
} from "../../routes";
import LoginSideImage from "../../assets/svg-icons/loginSideImage.svg";
import { resetPasswordHook } from "../../api-hooks/user";

const ResetPasswordAuthContainer = () => {
  const navigate = useNavigate();

  const router = useRouter();
  const {query} = router

  const onFinish = (values) => {

    console.log("On Finsih reset password", values, query)
    const data = {
      password: values?.password,
      confirmPassword: values?.confirmPassword,
      token: query?.token
    }
    resetPasswordHook(data, (response) => {
      console.log("Response", response);
      if(response?.status === 200){
        message.success(response?.data?.message);
        window.location.href = "/login"
      } else {
        message.error(response?.message);
      }
     

    })

  }
  return (
    <div className="login-background">
      <div className="header">
        {/* <OcLogo /> */}
        <img src={logoImage} style={{ height: "70px" }} />
      </div>
      <div className="auth-container">
        <Row className="auth-container-row">
          <Col span={12} className="login-form">
            <div className="form-pos">
              <h2 style={{ marginBottom: "0px" }}>Reset Password</h2>
              <p
                style={{
                  marginBottom: "40px",
                  marginTop: "5px",
                  fontWeight: "500",
                }}
              >
                Create a new password for your account
              </p>
              <Form
                 onFinish={onFinish}
                autoComplete="off"
                initialValues={{ remember: true }}
                style={{ maxWidth: "451px" }}
                layout="vertical"
              >
                <Form.Item
                  label="Enter your password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please Enter your Password",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Password"
                    
                    style={{
                      height: "48px",
                      borderRadius: "9px",
                      width: "451px",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Confirm your password"
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please Confirm your Password",
                    },
                  ]}
                >
                  <Input.Password
                    placeholder="Confirm Password"
                    style={{
                      height: "48px",
                      borderRadius: "9px",
                      width: "451px",
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <ComponentButton
                    title={"Reset Your Password"}
                    style={{
                      width: "100%",
                      fontSize: "18px",
                      height: "54px",
                      backgroundColor: "#15B9EB",
                      color: "#ffffff",
                    }}
                    type="submit"
                    htmlType="submit"
                    // onClick={() => {
                    //   navigate(VERIFY_ACCOUNT_URL);
                    // }}
                  />
                </Form.Item>
                <div
                  style={{
                    textAlign: "center",
                    color: "#8D8D8D",
                    fontSize: "16px",
                  }}
                >
                  Return To{" "}
                  <Link to={LOGIN_URL}>
                    <span style={{ color: "#15B9EB", cursor: "pointer" }}>
                      Sign In
                    </span>
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
          <Col span={12}>
            <img
              src={LoginSideImage}
              style={{ width: "100%", maxWidth: "520px" }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ResetPasswordAuthContainer;
