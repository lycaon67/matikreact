import React from "react";
import ControlContents from "./controlcontent";
import { Button, Modal } from "antd";
const DashboardModal = props => {
    function closeModal() {
        props.state[1]({
            visible: false
        });
    }
    let title = "Edit";
    let content;
    let form;

    return (
        <>
            <Modal
                visible={props.state[0].visible}
                title={title}
                onCancel={closeModal}
                footer={[
                    <Button key="back" onClick={closeModal}>
                        Close
                    </Button>,
                    <Button
                        key="submit"
                        type="primary"
                        htmlType="submit"
                        form={form}
                    >
                        Submit
                    </Button>
                ]}
            >
                <ControlContents {...props} />
            </Modal>
        </>
    );
};

export default DashboardModal;
