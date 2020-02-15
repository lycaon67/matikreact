import React from "react";
import { Form, Button, Icon, Input } from "antd";
const RoomContent = props => {
    const { getFieldDecorator } = props.form;

    
    const handleSubmit = e => {
      e.preventDefault();
      console.log(e);
    }

    return (
        <>
            <Form 
                onSubmit={handleSubmit}
                id="addRoom">
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
                            placeholder="Enter Room Name"
                            prefix={
                                <Icon
                                    type="gateway"
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

export default Form.create()(RoomContent);
