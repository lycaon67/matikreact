import React, {
    useContext,
    useState,
    useEffect,
    componentDidUpdate
} from "react";
import HeaderContext from "../../layouts/mainlayoutcontext";
import {
    Card,
    Icon,
    Modal,
    List,
    Button,
    Typography,
    Row,
    Col,
    Spin,
    Switch,
    Breadcrumb,
    Tag,
    Tooltip,
    Statistic,
    Table
} from "antd";
import HouseModal from "./modal/modal";
import { useParams } from "react-router-dom";

const HousePage = props => {
    const { roomid } = useParams();
    const { navHeader, setNavHeader } = useContext(HeaderContext);

    const { state, houseId } = navHeader;

    useEffect(() => {
        setNavHeader(oldState => ({
            ...oldState,
            state: true
        }));
    }, []);

    const [modalState, setModalState] = useState({
        details: null,
        visible: false
    });

    const showModal = (data) => {
        setModalState({
            details: data,
            visible: true
        });
    };

    const [devices, setDevices] = useState();
    const [ids, setIds] = useState({
        houseid: houseId,
        roomid: roomid
    });

    useEffect(() => {
        setIds({ houseid: houseId, roomid: roomid });
    }, []);

    useEffect(() => {
        dataRoom();
    }, [ids.roomid]);

    if (roomid != ids.roomid) {
        dataRoom();
        setIds({ houseid: houseId, roomid: roomid });
    }

    async function dataRoom() {
        await fetch("/api/house/device/" + houseId)
            .then(function(response) {
                if (response.status !== 200) {
                    return;
                }
                response.json().then(function(data) {
                    setDevices(data);
                });
            })
            .catch(function(err) {
                console.log("Fetch Error :-S", err);
            });
    }

    const showDeleteConfirm = data => {
        let content;
        if (data.type === "control") {
            content =
                "device key: " +
                data.key +
                " and type: " +
                data.type +
                " with : " +
                data.controlsCount;
        }

        Modal.confirm({
            title: "Are you sure delete this device?",
            content: content,
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                console.log("OK");
            },
            onCancel() {
                console.log("Cancel");
            }
        });
    };

    const columns = [
        {
            title: "Device Serial",
            dataIndex: "key",
            key: "deviceSerial",
            render: text => <a>{text}</a>
        },
        {
            title: "Type",
            dataIndex: "type",
            key: "type",
            render: text => {
                let color;
                if (text === "monitor") {
                    color = "yellow";
                } else if (text === "security") {
                    color = "blue";
                } else if (text === "control") {
                    color = "red";
                }
                return <Tag color={color}>{text}</Tag>;
            }
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <span>
                    <Tooltip placement="top" title="Edit">
                        <Icon
                            type="edit"
                            theme="twoTone"
                            onClick={() => showModal(record)}
                            style={{ fontSize: "18px", marginRight: "5px" }}
                        />
                    </Tooltip>
                    <Tooltip placement="top" title="Delete">
                        <Icon
                            type="delete"
                            theme="twoTone"
                            twoToneColor="red"
                            onClick={value => showDeleteConfirm(record)}
                            style={{ fontSize: "18px" }}
                        />
                    </Tooltip>
                </span>
            )
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
                            <Breadcrumb.Item>
                                <Icon type="home" />
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <span>Mansion 1</span>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Table
                            columns={columns}
                            dataSource={(devices || []).data}
                        />
                    </Col>
                </Row>
            </Card>
            <HouseModal state={[modalState, setModalState]} />
        </>
    );
};

export default HousePage;
