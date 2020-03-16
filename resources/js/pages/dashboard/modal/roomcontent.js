import React from "react";
import { Form, Button, Icon, Input } from "antd";
import axios from "axios";

const RoomContent = props => {
    const { getFieldDecorator } = props.form;

    const handleSubmit = e => {
        e.preventDefault();

        props.form.validateFields((err, values) => {
            if (!err) {
                axios
                    .post("/api/room", {
                        houseId: props.state[0].houseId,
                        roomName: values.room_name
                    })
                    .then(function(response) {
                        console.log(response);
                        props.state[1]({
                            visible: false
                        });
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
            }
        });
    };

    return (
        <>
            <Form onSubmit={handleSubmit} id="addRoom">
                <Form.Item>
                    {getFieldDecorator("room_name", {
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
