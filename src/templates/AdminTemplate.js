import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";
import { ReactComponent as Logo } from '../assets/Airbnb_logo.svg'
import Swal from 'sweetalert2'

import { MdOutlineLocationOn } from 'react-icons/md'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    BellFilled,
    HomeFilled,
    GlobalOutlined,
} from '@ant-design/icons';
import { Redirect, useHistory } from "react-router-dom";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

export const AdminTemplate = (props) => {
    const [state, setState] = useState({ collapsed: false })
    const onCollapse = (collapsed) => setState({ collapsed })

    const { collapsed } = state
    const history = useHistory(null)

    let { Component, ...restProps } = props
    return <Route {...restProps} render={(propsRoute) => {
        return (
            <>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                        <div className="my-4 px-2">
                            <NavLink to='/'>
                                <Logo className="w-8/12 h-full translate-x-1/4" fill="red" />
                            </NavLink>
                        </div>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <SubMenu key="sub1" icon={<UserOutlined />} title="User Management">
                                <Menu.Item key="1">
                                    <NavLink to="/admin/user-management" >User Management</NavLink>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <NavLink to="/admin/user-management/adduser" >Add User</NavLink>
                                </Menu.Item>
                            </SubMenu>

                            <SubMenu key="sub2" icon={<MdOutlineLocationOn />} title="Location Management">
                                <Menu.Item key="3">
                                    <NavLink to="/admin/location-management" >Location Management</NavLink>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <NavLink to="/admin/location-management/create-location" >Create Location</NavLink>
                                </Menu.Item>
                            </SubMenu>

                            {/* <SubMenu key="sub3" icon={<TeamOutlined />} title="Quan ly danh gia">
                                <Menu.Item key="5">
                                    <NavLink to="/admin/review-management" >Quan ly danh gia</NavLink>
                                </Menu.Item>
                                <Menu.Item key="6">
                                    <NavLink to='/admin/review/create-review' >Them danh gia</NavLink>
                                </Menu.Item>
                            </SubMenu> */}

                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <div className="p-3 flex justify-end items-center gap-8 shadow-sm">
                            <BellFilled className="text-lg" style={{ color: '#003a8c' }} />
                            <NavLink to='/' className='inline-flex'>
                                <HomeFilled className="text-lg" style={{ color: '#003a8c' }} />
                            </NavLink>
                            <GlobalOutlined className="text-lg" style={{ color: '#003a8c' }} />

                            <div className="btn-group mr-3">
                                <button type="button" className="text-blue-800 dropdown-toggle focus:outline-none" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dashboard
                                </button>
                                <div className="dropdown-menu dropdown-menu-right rounded-md mt-2 text-right text-sm">
                                    <button className="dropdown-item mt-1 focus:outline-none" type="button">Thông báo </button>
                                    <button className="dropdown-item my-2 focus:outline-none" type="button">Trợ giúp</button>
                                    <button className="dropdown-item mb-1 focus:outline-none"
                                        onClick={() => {
                                            Swal.fire({
                                                title: 'Are you sure to logout?',
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonColor: '#3085d6',
                                                cancelButtonColor: '#d33',
                                                confirmButtonText: 'Yes, Log out!'
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    localStorage.removeItem('USER_LOGIN')
                                                    history.push('/')
                                                }
                                            })
                                        }}>Đăng xuất</button>
                                </div>
                            </div>

                        </div>
                        <Content className="mt-4 mx-4">
                            <div className="bg-white h-full" style={{ padding: 24, minHeight: 360 }}>
                                {localStorage.getItem('USER_LOGIN')
                                    ? <Component {...propsRoute} />
                                    : <Redirect to='/' />
                                }
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </>
        )
    }} />
}