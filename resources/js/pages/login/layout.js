import React, { useContext, useState, useEffect } from "react";
import HeaderContext from "../../layouts/mainlayoutcontext";
import {
    Form,
    Icon,
    Input,
    Button,
    Typography,
    Row,
} from "antd";
import "./login.css"

const LogIn = props => {

  const { navHeader, setNavHeader } = useContext(HeaderContext);

  useEffect(() => {
      setNavHeader({
        state: false
      })
  }, []);

  const { getFieldDecorator } = props.form;

  return(<>
    <Row className="ant-layout-content login-wrap">
    <Row type="flex" justify="center" align="middle">
        <Typography.Title 
          level={1}
          alt="Logo"
          align="middle"
          style={{ width: 250, height: "auto", marginBottom: 30 }}
        >
          Matik
        </Typography.Title>
        
      </Row>
      <Row type="flex" justify="center" align="middle"> 
        <Form className="login-form">
          <Form.Item>
            {getFieldDecorator("username", {
              rules: [
                { required: true, message: "Please input your username!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("password", {
              rules: [
                { required: true, message: "Please input your Password!" }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </Row>
    </>
  )
}

export default Form.create()(LogIn);