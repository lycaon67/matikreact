import React, { useContext, useState, useEffect } from "react";
import HeaderContext from "../../layouts/mainlayoutcontext";
import {
    Card,
    Icon,
    List,
    Button,
    Typography,
    Row,
    Col,
    Descriptions,
    Switch,
    Breadcrumb,
    Statistic
} from "antd";

const HousePage = props => {
    const { navHeader, setNavHeader } = useContext(HeaderContext);
    useEffect(() => {
        setNavHeader({
            state: true
        });
    }, []);

    const data = [
        {
            title: "Title 1"
        },
        {
            title: "Title 2"
        },
        {
            title: "Title 3"
        },
        {
            title: "Title 4"
        },
        {
            title: "Title 5"
        },
        {
            title: "Title 6"
        },
        {
            title: "Title 6"
        },
        {
            title: "Title 6"
        },
        {
            title: "Title 6"
        },
        {
            title: "Title 6"
        },
        {
            title: "Title 6"
        },
        {
            title: "Title 6"
        },
        {
            title: "Title 6"
        }
    ];
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
                            <Breadcrumb.Item href="">
                                <Icon type="home" />
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                <span>Mansion 1</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>Room 1</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={6} offset={6}>
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
                    <Col span={6}>
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
                        dataSource={data}
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
                                        {item.title}
                                    </span>
                                    <Switch
                                        checkedChildren={<Icon type="check" />}
                                        unCheckedChildren={
                                            <Icon type="close" />
                                        }
                                        defaultChecked
                                    />
                                </Card>
                            </List.Item>
                        )}
                    />
                </Row>
            </Card>
        </>
    );
};

export default HousePage;
