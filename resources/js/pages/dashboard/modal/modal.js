import React  from "react";
import DeviceContents from "./devicecontent";
import RoomContents from "./roomcontent";
import HouseContents from "./housecontent";
import { Button, Modal } from "antd";
const DashboardModal = props => {

    function closeModal() {
        props.state[1]({
            visible: false
        });
    }
    console.log(props.state);
    let title;
    let content;
    let form;
    if(props.state[0].content === "device"){
        title = "Add Device";
        content = 1;
        form = "addDevice";
    }else if(props.state[0].content === "room"){
        title = "Add Room";
        content = 2;
        form = "addRoom";
    }else if(props.state[0].content === "house"){
        title = "Add House";
        content = 3;
        form = "addHouse";
    }
    
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
                    <Button key="submit" type="primary" htmlType="submit" form={form}>
                        Submit
                    </Button>
                ]}
            >
                {content === 1 && <DeviceContents {...props}/>}
                {content === 2 && <RoomContents {...props}/>}
                {content === 3 && <HouseContents {...props}/>}       
            </Modal>
        </>
    );
};

export default DashboardModal;
