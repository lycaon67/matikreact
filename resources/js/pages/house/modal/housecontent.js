import React from "react";
import { Form, Button, Icon, Input, Select } from "antd";
import axios from 'axios';

const { Option } = Select;

const HouseContent = props => {
    const { getFieldDecorator } = props.form;

    
	const handleSubmit = e => {
        e.preventDefault();
        
        props.form.validateFields((err, values) => {
            if(!err){
                
            } 
        });
    }

    return (
        <>
            <Form 
                onSubmit={handleSubmit}
                id="addHouse">
                <Form.Item>
                    {getFieldDecorator("channel_name", {
                        rules: [
                            {
                                required: true,
                                message: "Required!"
                            }
                        ]
                    })(
                        <Input
                            placeholder="Channel Name"
                            prefix={
                                <Icon
                                    type="home"
                                    style={{ color: "rgba(0,0,0,.25)" }}
                                />
                            }
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator("room_name", {
                        rules: [
                            {
                                required: true,
                                message: "Required!"
                            }
                        ]
                    })(
                        <Select defaultValue="Option1">
                            <Option value="Option1">Option1</Option>
                            <Option value="Option2">Option2</Option>
                        </Select>
                    )}
                </Form.Item>
            </Form>
        </>
    );
};

export default Form.create()(HouseContent);
