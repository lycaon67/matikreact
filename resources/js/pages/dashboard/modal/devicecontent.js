import React from "react";
import { Form, Button, Icon, Input } from "antd";
const DeviceContent = props => {
    const { getFieldDecorator } = props.form;

    
    const handleSubmit = e => {
      e.preventDefault();
      console.log(e);
    }

    return (
        <>
            <Form 
                onSubmit={handleSubmit}
                id="addDevice">
                <Form.Item>
                    {getFieldDecorator("device_id", {
                        rules: [
                            {
                                required: true,
                                message: "Required!"
                            }
                        ]
                    })(
                        <Input
                            placeholder="Enter the Device Key"
                            prefix={
                                <Icon
                                    type="deployment-unit"
                                    style={{ color: "rgba(0,0,0,.25)" }}
                                />
                            }
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("product_id", {
                        rules: [
                            {
                                required: true,
                                message: "Required!"
                            }
                        ]
                    })(
                        <Input
                            placeholder="Enter the Product Key"
                            prefix={
                                <Icon
                                    type="key"
                                    style={{ color: "rgba(0,0,0,.25)" }}
                                />
                            }
                        />
                    )}
                </Form.Item>
            </Form>
        </>
    );
};

export default Form.create()(DeviceContent);
