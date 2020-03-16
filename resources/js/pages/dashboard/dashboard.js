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
import { Link } from "react-router-dom";

const DashboardPage = props => {
    const { navHeader, setNavHeader } = useContext(HeaderContext);
    const { state, houseid, roomid } = navHeader;

    useEffect(() => {
        setNavHeader({
            state: true
        });
    }, []);

    const [modalState, setModalState] = useState({
        content: "",
        houseId: "",
        visible: false
    });

    const [house, setHouse] = useState({});

    useEffect(() => {
        dataHouse();
    }, []);

    async function dataHouse() {
        await fetch("./api/house/1")
            .then(function(response) {
                if (response.status !== 200) {
                    return;
                }
                // Examine the text in the response
                response.json().then(function(data) {
                    setHouse(data);
                });
            })
            .catch(function(err) {
                console.log("Fetch Error :-S", err);
            });
    }

    const houseId = ($houseid) => {
        setNavHeader((oldState) => ({
            ...oldState,
            houseId: $houseid
        }));
    };

    const showModal = (content, houseId) => {
        setModalState({
            content: content,
            houseId: houseId || null,
            visible: true
        });
    };

    return (
        <>
            <Card
                style={{
                    margin: "10px"
                }}
            >
                <Row gutter={[64, 16]}>
                    <Col span={12}>
                        <Typography.Title level={3}>All House</Typography.Title>
                    </Col>
                    <Col span={12}>
                        <Button
                            type="primary"
                            size="large"
                            id="housebtn"
                            onClick={() => {
                                showModal("house");
                            }}
                        >
                            <Icon type="plus" />
                            House
                        </Button>
                    </Col>
                </Row>
                <Row gutter={[64, 16]}>
                    <Col>
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 4,
                                lg: 4,
                                xl: 6,
                                xxl: 6
                            }}
                            dataSource={house.data}
                            renderItem={item => (
                                <List.Item>
                                    <Card
                                        actions={[
                                            <Tooltip
                                                placement="top"
                                                title="Configuration"
                                            >
                                                <Link to={"/house"}>
                                                    <Icon
                                                        type="setting"
                                                        onClick={() => {
                                                            houseId(item.id)
                                                        }}
                                                    />
                                                </Link>
                                            </Tooltip>,
                                            <Tooltip
                                                placement="top"
                                                title="Add Room"
                                            >
                                                <Icon
                                                    type="plus-square"
                                                    onClick={() => {
                                                        showModal(
                                                            "room",
                                                            item.houseid
                                                        );
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
                                            title={item.name}
                                            size="small"
                                        />
                                        <Row gutter={[16, 16]}>
                                            <Col>
                                                <span>
                                                    Rooms: {item.count}{" "}
                                                </span>
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
            <DashboardModal state={[modalState, setModalState]} />
        </>
    );
};

export default DashboardPage;
