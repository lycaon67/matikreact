import React, { useContext, useState, useEffect } from "react";
import HeaderContext from "../../layouts/mainlayoutcontext";
import 'antd/dist/antd.css';
import {
    Card,
    Icon,
    List,
    Button,
    Typography,
    Row,
    Col,
    Badge,
    Dropdown,
    Descriptions,
    Tooltip,
    Menu,
    Table
} from "antd";
import { Link } from "react-router-dom";

const AdminPage = props => {
    const { navHeader, setNavHeader } = useContext(HeaderContext);

    useEffect(() => {
        setNavHeader({
            state: true
        });
    }, []);
    
    const menu = (
        <Menu>
            <Menu.Item>Action 1</Menu.Item>
            <Menu.Item>Action 2</Menu.Item>
        </Menu>
    );

    const expandedRowRender = () => {
        const columns = [
            { title: "Date", dataIndex: "date", key: "date" },
            { title: "Name", dataIndex: "name", key: "name" },
            {
                title: "Status",
                key: "state",
                render: () => (
                    <span>
                        <Badge status="success" />
                        Finished
                    </span>
                )
            },
            {
                title: "Upgrade Status",
                dataIndex: "upgradeNum",
                key: "upgradeNum"
            },
            {
                title: "Action",
                dataIndex: "operation",
                key: "operation",
                render: () => (
                    <span className="table-operation">
                        <a>Pause</a>
                        <a>Stop</a>
                        <Dropdown overlay={menu}>
                            <a>
                                More <DownOutlined />
                            </a>
                        </Dropdown>
                    </span>
                )
            }
        ];

        const data = [];
        for (let i = 0; i < 3; ++i) {
            data.push({
                key: i,
                date: "2014-12-24 23:12:00",
                name: "This is production name",
                upgradeNum: "Upgraded: 56"
            });
        }
        return <Table columns={columns} dataSource={data} pagination={false} />;
    };

    const columns = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Platform', dataIndex: 'platform', key: 'platform' },
      { title: 'Version', dataIndex: 'version', key: 'version' },
      { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
      { title: 'Creator', dataIndex: 'creator', key: 'creator' },
      { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
      { title: 'Action', key: 'operation', render: () => <a>Publish</a> },
    ];
  
    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        name: 'Screem',
        platform: 'iOS',
        version: '10.3.4.5654',
        upgradeNum: 500,
        creator: 'Jack',
        createdAt: '2014-12-24 23:12:00',
      });
    }

    // const dataSource = [
    //     {
    //         key: "1",
    //         firstname: "Mike",
    //         lastname: "Sabala",
    //         email: "MikeSabala@gmail.com"
    //     },
    //     {
    //         key: "2",
    //         firstname: "John",
    //         lastname: "Gray",
    //         email: "JohnGray@gmail.com"
    //     }
    // ];

    // const columns = [
    //     {
    //         title: "First Name",
    //         dataIndex: "firstname",
    //         key: "firstname"
    //     },
    //     {
    //         title: "Last Name",
    //         dataIndex: "lastname",
    //         key: "lastname"
    //     },
    //     {
    //         title: "Email",
    //         dataIndex: "email",
    //         key: "email"
    //     },
    //     {
    //         title: "Action",
    //         key: "action",
    //         render: (text, record) => (
    //             <span>
    //                 <a style={{ marginRight: 16 }}>Edit</a>
    //             </span>
    //         )
    //     }
    // ];

    return (
        <>
            <Card
                style={{
                    margin: "10px"
                }}
            >
                <Row gutter={16}>
                    <Col span={24}>
                        <Table
                            className="components-table-demo-nested"
                            columns={columns}
                            expandable={{ expandedRowRender }}
                            dataSource={data}
                        />
                    </Col>
                </Row>
            </Card>
        </>
    );
};

export default AdminPage;
