import React from 'react';
import { Layout, PageHeader, Row, Col } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    HomeOutlined,
    SkinOutlined,
    ShoppingCartOutlined,
    CarOutlined,
    UsergroupAddOutlined,
    CodeSandboxOutlined,
    TransactionOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import {useSelector, useDispatch} from 'react-redux'


const { Header, Sider, Content } = Layout;

function Dashboard() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <Content
            className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}
        >
            <PageHeader
                className="site-page-header"
                title="Dashboard"
                //breadcrumb={{ routes }}
                subTitle="Dashboard Page Content Here"
            />
            <h1>Counter : {counter}</h1>
            <button onClick={()=>dispatch({type:"TAMBAH"})}>Tambah</button>
        </Content>
    )
}

export default Dashboard;