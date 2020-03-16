import React from "react";
import { Form, Button, Icon, Input } from "antd";
import axios from "axios";

const DeviceContent = props => {
    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();

        props.form.validateFields((err, values) => {
            if(!err){
                axios.post('/api/device', {
                    houseId: props.state[0].houseId,
                    key: values.device_key
                })
                .then(function (response) {
                    console.log(response);
                    props.state[1]({
                        visible: false
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
            
        });
    };

    return (
        <>
            <Form onSubmit={handleSubmit} id="addDevice">
                <Form.Item>
                    {getFieldDecorator("device_key", {
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
                {/* <Form.Item>
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
                </Form.Item> */}
            </Form>
        </>
    );
};

export default Form.create()(DeviceContent);
