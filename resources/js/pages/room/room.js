import React, {
    useContext,
    useState,
    useEffect
} from "react";
import HeaderContext from "../../layouts/mainlayoutcontext";
import {
    Card,
    Icon,
    List,
    Row,
    Col,
    Spin,
    Switch,
    Breadcrumb,
    Statistic
} from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";

const RoomPage = props => {
    const { roomid } = useParams();
    const { navHeader, setNavHeader } = useContext(HeaderContext);

    useEffect(() => {
        setNavHeader({
            state: true
        });
    }, []);

    const [controls, setControls] = useState();
    const [ids, setIds] = useState({
        roomid: roomid
    });

    useEffect(() => {
        setIds({ roomid: roomid });
    }, []);

    useEffect(() => {
        dataRoom();
    }, [ids.roomid]);

    if (roomid != ids.roomid) {
        dataRoom();
        setIds({ roomid: roomid });
    }

    async function dataRoom() {
        await fetch("/api/room/channel/" + roomid)
            .then(function(response) {
                if (response.status !== 200) {
                    return;
                }
                response.json().then(function(data) {
                    setControls(data.controls);
                });
            })
            .catch(function(err) {
                console.log("Fetch Error :-S", err);
            });
    }

    async function switchHandler(e, item) {
        await axios
            .put("/api/channel/" + item.id, {
                status: e
            })
            .then(function(response) {
                dataRoom();
            })
            .catch(function(error) {
                console.log(error);
            });
    }

    return (
        <>
            <Card
                style={{
                    margin: "5px"
                }}
            >
                <Row>
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Icon type="home" />
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <span>Mansion 1</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>Room 1</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Spin size="large" spinning={!controls}>
                    <Row>
                        <Col
                            xs={{ span: 24, offset: 0 }}
                            sm={{ span: 6, offset: 6 }}
                            md={{ span: 6, offset: 6 }}
                            lg={{ span: 6, offset: 6 }}
                            xl={{ span: 6, offset: 6 }}
                            xxl={{ span: 6, offset: 6 }}
                        >
                            <Card
                                style={{
                                    border: "none"
                                }}
                            >
                                <Statistic
                                    title="Temperature"
                                    value={38.5}
                                    precision={2}
                                    valueStyle={{ color: "#3f8600" }}
                                    suffix="°C"
                                    style={{
                                        textAlign: "center"
                                    }}
                                />
                            </Card>
                        </Col>
                        <Col
                            xs={{ span: 24, offset: 0 }}
                            sm={{ span: 6, offset: 0 }}
                            md={{ span: 6, offset: 0 }}
                            lg={{ span: 6, offset: 0 }}
                            xl={{ span: 6, offset: 0 }}
                            xxl={{ span: 6, offset: 0 }}
                        >
                            <Card
                                style={{
                                    border: "none"
                                }}
                            >
                                <Statistic
                                    title="Humidity"
                                    value={99}
                                    precision={2}
                                    valueStyle={{ color: "#cf1322" }}
                                    suffix="%"
                                    style={{
                                        textAlign: "center"
                                    }}
                                />
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                        <List
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 4,
                                lg: 4,
                                xl: 6,
                                xxl: 3
                            }}
                            dataSource={controls}
                            renderItem={item => (
                                <List.Item>
                                    <Card
                                        style={{
                                            textAlign: "center",
                                            border: "none"
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: "rgba(0, 0, 0, 0.45)",
                                                display: "block",
                                                marginBottom: "15px"
                                            }}
                                        >
                                            {item.name}
                                        </span>
                                        <Switch
                                            checkedChildren={
                                                <Icon type="check" />
                                            }
                                            unCheckedChildren={
                                                <Icon type="close" />
                                            }
                                            checked={item.status ? true : false}
                                            onChange={event =>
                                                switchHandler(event, item)
                                            }
                                        />
                                    </Card>
                                </List.Item>
                            )}
                        />
                    </Row>
                </Spin>
            </Card>
        </>
    );
};

export default RoomPage;
