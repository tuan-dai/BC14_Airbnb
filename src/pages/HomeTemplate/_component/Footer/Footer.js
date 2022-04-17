import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiGlobe } from 'react-icons/fi'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-coolGray-800 ">
            <div className="grid grid-cols-2 mx-auto py-12 gap-x-3 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4
            border-b border-gray-300" style={{ width: '85%' }}>
                <div className="flex flex-col space-y-4">
                    <h5 className="font-bold">Hỗ trợ</h5>
                    <div className="flex flex-col space-y-2 text-sm">
                        <NavLink className='footer' to=''>Trung tâm trợ giúp </NavLink>
                        <NavLink className='footer' to=''>Thông tin an toàn</NavLink>
                        <NavLink className='footer' to=''>Các tùy chọn hủy</NavLink>
                        <NavLink className='footer' to=''>Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi</NavLink>
                        <NavLink className='footer' to=''>Hỗ trợ người khuyết tật</NavLink>
                        <NavLink className='footer' to=''>Báo cáo lo ngại của hàng xóm</NavLink>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <h5 className="font-bold">Cộng đồng</h5>
                    <div className="flex flex-col space-y-2 text-sm">
                        <NavLink className='footer' to=''>Airbnb.org: nhà ở cứu trợ</NavLink>
                        <NavLink className='footer' to=''>Hỗ trợ dân tị nạn Afghanistan</NavLink>
                        <NavLink className='footer' to=''>Vì sự đa dạng và thân thuộc</NavLink>
                        <NavLink className='footer' to=''>Chống phân biệt đối xử</NavLink>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <h5 className="font-bold">Đón tiếp khách</h5>
                    <div className="flex flex-col space-y-2 text-sm">
                        <NavLink className='footer' to=''>Thử đón tiếp khách</NavLink>
                        <NavLink className='footer' to=''>AirCover: bảo vệ cho Host</NavLink>
                        <NavLink className='footer' to=''>Xem tài nguyên đón tiếp khách</NavLink>
                        <NavLink className='footer' to=''>Truy cập diễn đàn cộng đồng</NavLink>
                        <NavLink className='footer' to=''>Đón tiếp khách có trách nhiệm</NavLink>
                    </div>
                </div>

                <div className="flex flex-col space-y-4">
                    <h5 className="font-bold">Giới thiệu</h5>
                    <div className="flex flex-col space-y-2 text-sm">
                        <NavLink className='footer' to=''>Trang tin tức</NavLink>
                        <NavLink className='footer' to=''>Tìm hiểu các tính năng mới</NavLink>
                        <NavLink className='footer' to=''>Thư ngỏ từ các nhà sáng lập</NavLink>
                        <NavLink className='footer' to=''>Cơ hội nghề nghiệp</NavLink>
                        <NavLink className='footer' to=''>Nhà đầu tư</NavLink>
                        <NavLink className='footer' to=''>Airbnb Luxe</NavLink>
                    </div>
                </div>
            </div>

            <div style={{ width: '85%' }} className='mx-auto'>
                <div className="footer-contact flex justify-between py-4 text-sm">
                    <div className='footer-term flex items-center gap-2'>
                        <span>© 2021 Airbnb, Inc.</span>
                        <div className='flex items-center'>
                            <NavLink className='footer' to=''>· Quyền riêng tư</NavLink>
                            <NavLink className='footer' to=''>· Điều khoản</NavLink>
                            <NavLink className='footer' to=''>· Sơ đồ trang web</NavLink>
                        </div>
                    </div>

                    <div className='flex gap-16 items-center'>
                        <div className='flex gap-4'>
                            <span className='flex items-center gap-1'>
                                <FiGlobe />
                                <span>Tiếng Việt</span>
                            </span>
                            <span>$ USD</span>
                        </div>
                        <div className='flex gap-5 items-center text-lg'>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
