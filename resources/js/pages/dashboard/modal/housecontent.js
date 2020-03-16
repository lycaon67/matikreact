import React from "react";
import { Form, Button, Icon, Input } from "antd";
import axios from 'axios';

const HouseContent = props => {
    const { getFieldDecorator } = props.form;

    
	const handleSubmit = e => {
        e.preventDefault();
        
        props.form.validateFields((err, values) => {
            if(!err){
                axios.post('/api/house', {
                    userId: 1,
                    houseName: values.house_name
                })
                .then(function (response) {
                    props.state[1]({
                        visible: false
                    });
                })
                .catch(function (error) {
                    console.error(error);
                });
            } 
        });
    }

    return (
        <>
            <Form 
                onSubmit={handleSubmit}
                id="addHouse">
                <Form.Item>
                    {getFieldDecorator("house_name", {
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
