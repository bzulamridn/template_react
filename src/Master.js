import React, { useState } from 'react';
import { Link, browserHistory } from 'react-router';
import { Layout, Menu } from 'antd';
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
import './Master.css';

const { Header, Sider, Content } = Layout;

export default function Master(props) {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed)
    }
 
    return (
            <Layout style={{ height:'100%' }}>
                <Sider trigger={null} collapsible collapsed={collapsed} >
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" onClick={ () => browserHistory.push('/')}>
                            <HomeOutlined />
                            <span>Beranda</span>
                        </Menu.Item>
                        <Menu.Item key="2" onClick={ () => browserHistory.push('/transaksi')}>
                            <ShoppingCartOutlined/>
                            <span>Transaksi</span>
                        </Menu.Item>
                        <Menu.Item key="3" onClick={ () => browserHistory.push('/paket')}>
                            <CodeSandboxOutlined />
                            <span>Paket </span>
                        </Menu.Item>
                        <Menu.Item key="4" onClick={ () => browserHistory.push('/barang')}>
                            <SkinOutlined />
                            <span>Barang</span>
                        </Menu.Item>
                        <Menu.Item key="5" onClick={ () => browserHistory.push('/konsumen')}>
                            <UsergroupAddOutlined />
                            <span>Konsumen</span>
                        </Menu.Item>
                        <Menu.Item key="6" onClick={ () => browserHistory.push('/kurir')}>
                            <CarOutlined />
                            <span>Kurir</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: toggle,
                        })}
                    </Header>
                    {props.children}
                </Layout>
            </Layout>
    )
}


