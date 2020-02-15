import React, { useContext, useState, useEffect } from "react";
import HeaderContext from "../../layouts/mainlayoutcontext";
import "./css/dashboard.css";
import DashboardModal from "./modal/modal";
import {
    Card,
    Icon,
    List,
    Button,
    Typography,
    Row,
    Col,
    Descriptions,
    Tooltip
} from "antd";

const DashboardPage = props => {

    const data = [
        {
            title: "Mansion 1"
        },
        {
            title: "Mansion 2"
        },
        {
            title: "Mansion 3"
        },
        {
            title: "Mansion 4"
        }
    ];

    const { navHeader, setNavHeader } = useContext(HeaderContext);

    useEffect(() => {
        setNavHeader({
          state: true
        })
    }, []);

    const [modalState, setModalState] = useState({
        content: '',
        visible: false
    });

    const showModal = (content) => {
        setModalState({
            content: content,
            visible: true
        });
    };

    return (
        <>
            <Card
                style={{
                    margin: "5px"
                }}
            >
                <Row gutter={[64, 16]}>
                    <Col span={12}>
                        <Typography.Title level={3}>All House</Typography.Title>
                    </Col>
                    <Col span={12}>
                        <Button type="primary" size="large" id="housebtn" onClick={() => {showModal("house")}}>
                            <Icon type="plus" />
                            House
                        </Button>
                    </Col>
                </Row>
                <Row gutter={[64, 16]}>
                    <Col>
                        <List
                            grid={{ gutter: 16, column: 4 }}
                            dataSource={data}
                            renderItem={item => (
                                <List.Item>
                                    <Card
                                        actions={[
                                            <Tooltip
                                                placement="top"
                                                title="Configuration"
                                            >
                                                <Icon
                                                    type="setting"
                                                    onClick={() => {}}
                                                />
                                            </Tooltip>,
                                            <Tooltip
                                                placement="top"
                                                title="Add Room"
                                            >
                                                <Icon
                                                    type="plus-square"
                                                    onClick={() => {
                                                        console.log(
                                                            "this room"
                                                        );

                                                        showModal("room");
                                                    }}
                                                />
                                            </Tooltip>,
                                            <Tooltip
                                                placement="top"
                                                title="Add Device"
                                            >
                                                <Icon
                                                    type="control"
                                                    onClick={() => {
                                                        console.log(
                                                            "this Device"
                                                        );
                                                        showModal("device");
                                                    }}
                                                />
                                            </Tooltip>
                                        ]}
                                    >
                                        <Descriptions
                                            title={item.title}
                                            size="small"
                                        />
                                        <Row gutter={[16, 16]}>
                                            <Col>
                                                <span>Rooms: 5</span>
                                            </Col>
                                        </Row>
                                        <Row gutter={[16, 16]}>
                                            <Col>
                                                <span>Used Channels: 5</span>
                                            </Col>
                                        </Row>
                                        <Row gutter={[16, 16]}>
                                            <Col>
                                                <span>Unused Channels: 5</span>
                                            </Col>
                                        </Row>
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </Card>
            <DashboardModal state={[modalState, setModalState]}/>
        </>
    );
};

export default DashboardPage;
