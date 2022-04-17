import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Review from './Review'
import { UploadOutlined, HeartOutlined, KeyOutlined, WifiOutlined } from '@ant-design/icons';
import { FaStar } from 'react-icons/fa'
import BookingRoom from './BookingRoom';
import { getRoomDetail } from '../../../../redux/actions/RoomDetail';
import './RoomDetail.css'

export default function RoomDetail(props) {
    const id = props.match.params.id
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRoomDetail(id))
    }, [])

    const { room } = useSelector(state => state.RoomDetail_Reducer)

    return (
        <section className='container mt-28'>
            <h3>{room?.name}</h3>
            <div className='md:flex-row justify-between'>
                <ul className='flex items-center'>
                    <li>
                        <FaStar fill='red' />
                    </li>
                    <li>
                        <span className='ml-1 mr-3 text-gray-500 underline text-sm'>({room?.locationId?.valueate} đánh giá)</span>
                    </li>
                    <li>
                        <span className='text-gray-500 mr-1'>•</span>
                        <span className='text-gray-500 underline text-sm'>{room?.locationId?.name} • {room?.locationId?.province} • {room?.locationId?.country}</span>
                    </li>
                </ul>
                <div className='flex items-center gap-4'>
                    <span className='flex items-center gap-1'>
                        <UploadOutlined />
                        <span className='underline cursor-pointer'>Chia sẻ</span>
                    </span>

                    <span className='flex items-center gap-1'>
                        <HeartOutlined />
                        <span className='underline cursor-pointer'>Lưu</span>
                    </span>
                </div>
            </div>

            {/* ROOM PHOTO */}
            <div className='grid grid-cols-4 mt-4 gap-2'>
                <img className='rounded-tl-xl rounded-bl-md col-span-2 row-span-2 object-cover w-full h-full' src={room?.image} alt="" />
                <img src="https://picsum.photos/id/239/300" alt="" />
                <img className='rounded-tr-xl' src="https://picsum.photos/id/253/300" alt="" />
                <img src="https://picsum.photos/id/248/300" alt="" />
                <img className='rounded-br-xl' src="https://picsum.photos/id/249/300" alt="" />
            </div>

            {/* ROOM DETAIL */}
            <div className='flex mt-5 gap-24' >
                {/* LEFT */}
                <div style={{ width: '65%' }}>
                    <div className='flex justify-between items-center'>
                        <div>
                            <h4>Toàn bộ căn hộ condo. Chủ nhà Phong</h4>
                            <ul className='flex gap-1'>
                                <li>{room?.guests} khách</li>
                                <li>
                                    <span> • </span>
                                    <span>{room?.bedRoom} phòng ngủ</span>
                                </li>
                                <li>
                                    <span> • </span>
                                    <span>{room?.kitchen} giường</span>
                                </li>
                                <li>
                                    <span> • </span>
                                    <span>{room?.bath} phòng tắm</span>
                                </li>
                            </ul>
                        </div>
                        <img className='rounded-full w-12 h-12' src={room?.image} alt='' />
                    </div>

                    <div className='flex gap-3 items-baseline pt-4 border-t'>
                        <span className='text-2xl'><KeyOutlined /></span>
                        <div>
                            <p className='font-medium mb-1'>Trải nghiệm nhận phòng tuyệt vời</p>
                            <p className='text-gray-500 text-sm'>100% khách gần đây đã xếp hạng 5 sao cho quy trình nhận phòng.</p>
                        </div>
                    </div>
                    <div className='flex gap-4 items-baseline'>
                        <div className='text-2xl'><WifiOutlined /></div>
                        <div>
                            <p className='font-medium mb-1'>Wifi</p>
                            <p className='text-gray-500 text-sm'>Khách thường tìm kiếm tiện nghi phổ biến này</p>
                        </div>
                    </div>
                    <div className='flex gap-3 pb-3 mb-4 border-b items-baseline'>
                        <div className='text-2xl'><HeartOutlined /></div>
                        <div>
                            <p className='font-medium mb-1'>Chủ nhà được xếp hạng cao</p>
                            <p className='text-gray-500 text-sm'>đã nhận được xếp hạng 5 sao từ 100% khách gần đây.</p>
                        </div>
                    </div>

                    {/* INFO LOCATION */}
                    <section className='mb-12 pb-2 border-b'>
                        <p>{room?.description}</p>
                        <button className='focus:outline-none mb-3'>
                            <span className='underline font-medium mr-2'>Hiển thị thêm</span>
                            <span></span>
                        </button>
                    </section>

                    {/* COZY */}
                    <section className='mb-12'>
                        <h4>Nơi này có những gì cho bạn</h4>
                        <div className='flex gap-24'>
                            {/* COZY LEFT */}
                            <div className='my-4'>
                                {room?.kitchen
                                    ? <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z" /></svg>
                                        <span>Bếp</span>
                                    </div>
                                    : <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z" /></svg>
                                        <span className='line-through'>Bếp</span>
                                    </div>}
                                {room?.dryer
                                    ? <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M25 1a2 2 0 0 1 1.995 1.85L27 3v26a2 2 0 0 1-1.85 1.995L25 31H7a2 2 0 0 1-1.995-1.85L5 29V3a2 2 0 0 1 1.85-1.995L7 1zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg>
                                        <span>Máy giặt</span>
                                    </div>
                                    : <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M25 1a2 2 0 0 1 1.995 1.85L27 3v26a2 2 0 0 1-1.85 1.995L25 31H7a2 2 0 0 1-1.995-1.85L5 29V3a2 2 0 0 1 1.85-1.995L7 1zm0 10H7v18h18zm-15 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM25 3H7v6h18zM10 5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg>
                                        <span className='line-through'>Máy giặt</span>
                                    </div>}
                                {room?.cableTV
                                    ? <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z" /></svg>
                                        <span>TV</span>
                                    </div>
                                    : <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z" /></svg>
                                        <span className='line-through'>TV</span>
                                    </div>}
                                {room?.gym
                                    ? <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M23 1a2 2 0 0 1 1.995 1.85L25 3v16h4v2h-2v8h2v2H3v-2h2v-8H3v-2h4V3a2 2 0 0 1 1.85-1.995L9 1zM9 21H7v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm-10-8H9v6h6zm8 0h-6v6h6zM15 3H9v8h6zm8 0h-6v8h6z" /></svg>
                                        <span>Phòng tập gym</span>
                                    </div>
                                    : <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M23 1a2 2 0 0 1 1.995 1.85L25 3v16h4v2h-2v8h2v2H3v-2h2v-8H3v-2h4V3a2 2 0 0 1 1.85-1.995L9 1zM9 21H7v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm4 0h-2v8h2zm-10-8H9v6h6zm8 0h-6v6h6zM15 3H9v8h6zm8 0h-6v8h6z" /></svg>
                                        <span className='line-through'>Phòng tập gym</span>
                                    </div>}
                                {room?.heating
                                    ? <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="m31 6v2h-1v23h-6v-18h-16v18h-6v-23h-1v-2zm-15.368 8.991.959.702c3.317 2.43 5.141 5.07 5.382 7.934l.02.287.005.207.002.138c0 3.183-2.698 5.741-6 5.741-3.168 0-5.789-2.358-5.988-5.387l-.01-.218-.002-.147c.004-1.629.557-3.29 1.64-4.985l.224-.34.677-.98 1.238.783zm12.368-6.991h-24v21h2v-16a2 2 0 0 1 1.697-1.977l.154-.018.149-.005h16a2 2 0 0 1 1.995 1.85l.005.15v16h2zm-12 17.355-.092.093c-.62.655-.908 1.233-.908 1.719 0 .428.413.833 1 .833s1-.405 1-.833c0-.445-.242-.968-.76-1.556l-.148-.163zm.351-7.315-1.766 3.562-1.466-.927-.152.265c-.534.96-.844 1.878-.937 2.749l-.023.289-.007.26.001.118c.025.92.408 1.761 1.024 2.403.14-1.137.86-2.237 2.097-3.324l.238-.203.64-.534.64.534c1.384 1.153 2.188 2.32 2.335 3.528a3.593 3.593 0 0 0 1.018-2.27l.007-.218-.006-.28c-.088-1.865-1.113-3.702-3.129-5.51l-.268-.236zm14.649-16.04v2h-30v-2z" /></svg>
                                        <span>Lò sưởi trong nhà</span>
                                    </div>
                                    : <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="m31 6v2h-1v23h-6v-18h-16v18h-6v-23h-1v-2zm-15.368 8.991.959.702c3.317 2.43 5.141 5.07 5.382 7.934l.02.287.005.207.002.138c0 3.183-2.698 5.741-6 5.741-3.168 0-5.789-2.358-5.988-5.387l-.01-.218-.002-.147c.004-1.629.557-3.29 1.64-4.985l.224-.34.677-.98 1.238.783zm12.368-6.991h-24v21h2v-16a2 2 0 0 1 1.697-1.977l.154-.018.149-.005h16a2 2 0 0 1 1.995 1.85l.005.15v16h2zm-12 17.355-.092.093c-.62.655-.908 1.233-.908 1.719 0 .428.413.833 1 .833s1-.405 1-.833c0-.445-.242-.968-.76-1.556l-.148-.163zm.351-7.315-1.766 3.562-1.466-.927-.152.265c-.534.96-.844 1.878-.937 2.749l-.023.289-.007.26.001.118c.025.92.408 1.761 1.024 2.403.14-1.137.86-2.237 2.097-3.324l.238-.203.64-.534.64.534c1.384 1.153 2.188 2.32 2.335 3.528a3.593 3.593 0 0 0 1.018-2.27l.007-.218-.006-.28c-.088-1.865-1.113-3.702-3.129-5.51l-.268-.236zm14.649-16.04v2h-30v-2z" /></svg>
                                        <span className='line-through'>Lò sưởi trong nhà</span>
                                    </div>}
                            </div>
                            {/* COZY RIGHT */}
                            <div className='my-4'>
                                {room?.wifi
                                    ? <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z" /></svg>
                                        <span>Wifi</span>
                                    </div>
                                    : <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z" /></svg>
                                        <span className='line-through'>Wifi</span>
                                    </div>}
                                {room?.hotTub
                                    ? <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M9.5 2a4.5 4.5 0 0 1 3.527 7.295c.609.215 1.173.55 1.66.988l.191.182L17.414 13H31v2h-2v14a2 2 0 0 1-1.85 1.995L27 31H5a2 2 0 0 1-1.995-1.85L3 29V15H1v-2h2.1a5.009 5.009 0 0 1 2.955-3.608A4.5 4.5 0 0 1 9.5 2zm7.085 13H5v14h22V15h-7.586l3.293 3.294-1.414 1.414zM9.5 4a2.5 2.5 0 0 0-1 4.792V11H8a3.001 3.001 0 0 0-2.83 2h9.415l-1.121-1.121a3 3 0 0 0-1.923-.872L11.343 11H10.5V8.792A2.5 2.5 0 0 0 9.5 4zm15.486-3a6.957 6.957 0 0 1-1.803 4.07l-.445.463A8.971 8.971 0 0 0 20.354 11H18.35a10.975 10.975 0 0 1 3.202-7.118A4.961 4.961 0 0 0 22.974 1zm2.007 0h2.004a10.96 10.96 0 0 1-3.202 7.124A4.974 4.974 0 0 0 24.373 11h-2.012a6.97 6.97 0 0 1 1.804-4.064l.444-.462A8.958 8.958 0 0 0 26.993.999z" /></svg>
                                        <span>Bồn tắm nước nóng</span>
                                    </div>
                                    : <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M9.5 2a4.5 4.5 0 0 1 3.527 7.295c.609.215 1.173.55 1.66.988l.191.182L17.414 13H31v2h-2v14a2 2 0 0 1-1.85 1.995L27 31H5a2 2 0 0 1-1.995-1.85L3 29V15H1v-2h2.1a5.009 5.009 0 0 1 2.955-3.608A4.5 4.5 0 0 1 9.5 2zm7.085 13H5v14h22V15h-7.586l3.293 3.294-1.414 1.414zM9.5 4a2.5 2.5 0 0 0-1 4.792V11H8a3.001 3.001 0 0 0-2.83 2h9.415l-1.121-1.121a3 3 0 0 0-1.923-.872L11.343 11H10.5V8.792A2.5 2.5 0 0 0 9.5 4zm15.486-3a6.957 6.957 0 0 1-1.803 4.07l-.445.463A8.971 8.971 0 0 0 20.354 11H18.35a10.975 10.975 0 0 1 3.202-7.118A4.961 4.961 0 0 0 22.974 1zm2.007 0h2.004a10.96 10.96 0 0 1-3.202 7.124A4.974 4.974 0 0 0 24.373 11h-2.012a6.97 6.97 0 0 1 1.804-4.064l.444-.462A8.958 8.958 0 0 0 26.993.999z" /></svg>
                                        <span className='line-through'>Bồn tắm nước nóng</span>
                                    </div>}
                                {room?.evalator
                                    ? <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z" /></svg>
                                        <span>Thang máy</span>
                                    </div>
                                    : <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M5 9.242l2 2L6.999 29h17.758l2 2H3v-2h1.999L5 9.242zm-1.293-6.95l26 26-1.414 1.415-26-26 1.414-1.414zM25 1a2 2 0 0 1 1.994 1.85L27 3l-.001 19.756-2-1.999L25 3H7.242l-1.53-1.53a1.991 1.991 0 0 1 1.139-.465L7 1h18zm-3 14a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /></svg>
                                        <span className='line-through'>Thang máy</span>
                                    </div>}
                                {room?.indoorFireplace
                                    ? <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M14 27l-.005.2a4 4 0 0 1-3.789 3.795L10 31H4v-2h6l.15-.005a2 2 0 0 0 1.844-1.838L12 27zM10 1c.536 0 1.067.047 1.58.138l.38.077 17.448 3.64a2 2 0 0 1 1.585 1.792l.007.166v6.374a2 2 0 0 1-1.431 1.917l-.16.04-13.554 2.826 1.767 6.506a2 2 0 0 1-1.753 2.516l-.177.008H11.76a2 2 0 0 1-1.879-1.315l-.048-.15-1.88-6.769A9 9 0 0 1 10 1zm5.692 24l-1.799-6.621-1.806.378a8.998 8.998 0 0 1-1.663.233l-.331.008L11.76 25zM10 3a7 7 0 1 0 1.32 13.875l.331-.07L29 13.187V6.813L11.538 3.169A7.027 7.027 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /></svg>
                                        <span>Lò sưởi trong nhà</span>
                                    </div>
                                    : <div className='flex gap-3 mb-3'>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', height: 24, width: 24, fill: 'currentcolor' }}><path d="M14 27l-.005.2a4 4 0 0 1-3.789 3.795L10 31H4v-2h6l.15-.005a2 2 0 0 0 1.844-1.838L12 27zM10 1c.536 0 1.067.047 1.58.138l.38.077 17.448 3.64a2 2 0 0 1 1.585 1.792l.007.166v6.374a2 2 0 0 1-1.431 1.917l-.16.04-13.554 2.826 1.767 6.506a2 2 0 0 1-1.753 2.516l-.177.008H11.76a2 2 0 0 1-1.879-1.315l-.048-.15-1.88-6.769A9 9 0 0 1 10 1zm5.692 24l-1.799-6.621-1.806.378a8.998 8.998 0 0 1-1.663.233l-.331.008L11.76 25zM10 3a7 7 0 1 0 1.32 13.875l.331-.07L29 13.187V6.813L11.538 3.169A7.027 7.027 0 0 0 10 3zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" /></svg>
                                        <span className='line-through'>Lò sưởi trong nhà</span>
                                    </div>}
                            </div>
                        </div>
                        <button className='text-lg font-medium rounded-md border-2 border-gray-900 hover:bg-gray-100 px-4 py-2'>Hiển thị tất cả 28 tiện nghi</button>
                    </section>
                </div>

                {/* RIGHT */}
                <div style={{ width: '35%' }}>
                    <BookingRoom room={room} />
                </div>

            </div>
            <Review id={id} />
        </section>
    )
}
