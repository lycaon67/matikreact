import React from "react";
import { Form, Button, Icon, Input } from "antd";
const HouseContent = props => {
    const { getFieldDecorator } = props.form;

    
    const handleSubmit = e => {
      e.preventDefault();
      console.log(e);
    }

    return (
        <>
            <Form 
                onSubmit={handleSubmit}
                id="addHouse">
                <Form.Item>
                    {getFieldDecorator("house_id", {
                        rules: [
                            {
                                required: true,
                                message: "Required!"
                            }
                        ]
                    })(
                        <Input
                            placeholder="Enter House Name"
                            prefix={
                                <Icon
                                    type="home"
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

export default Form.create()(HouseContent);
