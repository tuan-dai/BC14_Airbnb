import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { FaGlobe } from 'react-icons/fa'
import { ReactComponent as Logo } from '../../../../assets/Airbnb_logo.svg'
import Swal from 'sweetalert2'

import './Header.css'
import SignIn from '../../User Identification/SignIn';
import SignUp from '../../User Identification/SignUp';

import { getLocation } from '../../../../redux/actions/Location'
import { SEARCH_LOCATION } from '../../../../redux/types/Location';

export default function Header(props) {
    const [visible1, setVisible1] = useState(true)
    const [visible2, setVisible2] = useState(false)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLocation())
    }, [])

    const { listLocation, keyword } = useSelector(state => state.Location_Reducer)
    const userInfo = JSON.parse(localStorage.getItem('USER_LOGIN'))
    // SEARCH LOCATION
    const renderSearchLocation = () => {
        const arr = listLocation?.filter(item => item?.name?.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
        return arr?.map(item => {
            return <NavLink style={{ background: 'none' }} key={item._id} to={`/homes/${item._id}`} className="dropdown-item text-dark my-2" href="#">
                <div className='flex items-center gap-3'>
                    <span className='rounded-md text-xl bg-gray-200 px-3 py-2'><i className="fa fa-map-marker-alt"></i></span>
                    <span>{item.name}, {item.province}, {item.country}</span>
                </div>
            </NavLink>
        })
    }

    //LOG OUT
    const logOut = () => {
        Swal.fire({
            title: 'Are you sure to logout?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem('USER_LOGIN')
                window.location.reload()
            }
        })

    }

    return (
        <header>
            <div className="shadow-sm fixed z-50 top-0 bg-white w-full">
                <div style={{ width: '85%' }} className="container-fluid flex justify-between items-center mx-auto px-0">
                    <NavLink to='/' aria-label="Back to homepage" className="flex items-center header-logo">
                        <Logo className='w-24 h-auto ' fill='red' />
                    </NavLink>

                    {/* SEARCH */}
                    {visible1
                        ? <div className='header-search flex items-center justify-between cursor-pointer w-72 rounded-full my-3 py-2 border shadow-sm'
                            onClick={() => {
                                setVisible1(false)
                                setVisible2(true)
                            }} >
                            <span className="px-4 text-sm">Bắt đầu tìm kiếm</span>
                            <Button className='mr-2' type='danger' shape="circle" icon={<SearchOutlined />} />
                        </div>
                        : <div className='py-3'>
                            <ul className="nav nav-pills mb-3 left-1/2 translate-x-1/4" id="pills-tab" role="tablist"
                                onClick={() => {
                                    setVisible1(true)
                                    setVisible2(false)
                                }}>
                                <li className="nav-item" role="presentation">
                                    <NavLink to='' style={{ background: 'none' }} className="nav-link active text-dark" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Nơi ở</NavLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <NavLink to='' style={{ background: 'none' }} className="nav-link text-dark" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Trải nghiệm</NavLink>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <NavLink to='' style={{ background: 'none' }} className="nav-link text-dark" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Trải nghiệm trực tuyến</NavLink>
                                </li>
                            </ul>
                        </div>}

                    <div className="flex items-center flex-shrink-0 header-toggle">
                        <NavLink to='' className="self-center px-8 py-3 text-dark">Trở thành chủ nhà</NavLink>
                        <NavLink to='' className="py-3 text-dark">
                            <FaGlobe />
                        </NavLink>

                        {/* DROPDOWN */}
                        <div className="ml-4">
                            <button type="button" className="dropdown-toggle rounded-full border border-gray-200 shadow-sm w-20 py-1 
                        flex justify-center items-center gap-3 text-green-700 focus:outline-none" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fa fa-bars"></i>
                                {localStorage.getItem('USER_LOGIN')
                                    ? <Avatar src='https://picsum.photos/id/241/200/' />
                                    : <i className="fa fa-user-circle  text-3xl"></i>}
                            </button>
                            <div className="dropdown-menu dropdown-menu-right w-60 rounded-xl mt-2 shadow-sm">
                                {localStorage.getItem('USER_LOGIN')
                                    ? <NavLink activeClassName='' to={`/info/${userInfo?.user?._id}`} className="dropdown-item mb-2 hover:bg-gray-200" >Thông tin cá nhân</NavLink>
                                    : <div><button className="dropdown-item mb-2" type="button" data-toggle="modal" data-target="#signUpModal">
                                        Đăng ký
                                    </button>
                                        <button className="dropdown-item mb-2" type="button" data-toggle="modal" data-target="#signInModal">
                                            Đăng nhập
                                        </button></div>}

                                <div className='border mb-2'></div>
                                <button className="dropdown-item mb-2 focus:outline-none" type="button">Cho thuê nhà</button>
                                <button className="dropdown-item mb-2 focus:outline-none" type="button">Tổ chức trải nghiệm</button>
                                <button className="dropdown-item mb-2 focus:outline-none" type="button">Trợ giúp</button>
                                {localStorage.getItem('USER_LOGIN')
                                    ? <button className="dropdown-item focus:outline-none" type="button" onClick={logOut}>Đăng xuất</button> : ''}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-6/12 mx-auto header-tab'>
                    {visible2
                        ? <div className="tab-content" id="pills-tabContent">
                            {/* TAB 1 */}
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <ul className='flex items-center justify-between rounded-full border'>
                                    <li className=' flex flex-col text-sm px-6 pr-16 py-3 
                                    hover:bg-gray-100 rounded-full cursor-pointer'>
                                        <span className='mb-0 font-medium'>Địa điểm</span>
                                        <div className='dropdown'>
                                            <input style={{ background: 'none' }} className='focus:outline-none w-auto dropdown-toggle' type='search' placeholder='Bạn sắp đi đâu' data-toggle="dropdown"
                                                onChange={(e) => dispatch({
                                                    type: SEARCH_LOCATION,
                                                    payload: e.target.value
                                                })} />
                                            <div style={{ borderRadius: '1.3rem' }} className="dropdown-menu mt-4" aria-labelledby="dropdownMenuButton">
                                                {renderSearchLocation()}
                                            </div>
                                        </div>

                                    </li>

                                    <li className='flex flex-col text-sm px-6 pr-20 py-3 hover:bg-gray-100 rounded-full cursor-pointer'>
                                        <span className='mb-0 font-medium'>Nhận phòng</span>
                                        <span className='text-gray-500'>Thêm ngày</span>
                                    </li>

                                    <li className='flex flex-col text-sm px-6 pr-20 py-3 hover:bg-gray-100 rounded-full cursor-pointer'>
                                        <span className='mb-0 font-medium'>Trả phòng</span>
                                        <span className='text-gray-500'>Thêm ngày</span>
                                    </li>

                                    <li className='dropdown flex justify-between items-center px-6 gap-16 py-3 hover:bg-gray-100 rounded-full cursor-pointer'>
                                        <div className='flex flex-col text-sm dropdown-toggle' data-toggle="dropdown">
                                            <span className='mb-0 font-medium'>Khách</span>
                                            <span className='text-gray-500'>Thêm khách</span>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                        <Button className='-mr-3' type='danger' size='large' shape='circle' icon={<SearchOutlined />} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        : ''
                    }
                </div>

            </div>
            <SignIn />
            <SignUp />
        </header>
    )
}
