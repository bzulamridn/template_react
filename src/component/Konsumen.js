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


const { Header, Sider, Content } = Layout;

function Konsumen() {
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
        </Content>
    )
}

export default Konsumen;