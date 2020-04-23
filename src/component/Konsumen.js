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
import {useSelector, useDispatch} from 'react-redux';

const { Header, Sider, Content } = Layout;

function Konsumen() {
    const counter = useSelector(state => state.counter)
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
                title="Konsumen"
                //breadcrumb={{ routes }}
                subTitle="Konsumen Page Content Here"
            />
            <h1>{counter}</h1>
        </Content>
    )
}

export default Konsumen;