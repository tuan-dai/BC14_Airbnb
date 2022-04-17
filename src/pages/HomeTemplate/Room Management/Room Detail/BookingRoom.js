import { DownOutlined, MinusCircleOutlined, MinusOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { DatePicker } from 'antd'
import { useFormik } from 'formik'
import moment from 'moment'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookingRoom } from '../../../../redux/actions/RoomDetail'
import { FaStar } from 'react-icons/fa'

export default function BookingRoom(props) {
    const { room } = props
    const myRef = useRef(null)
    const dispatch = useDispatch()
    const { adult, child, infant } = useSelector(state => state.Quantity_Reducer)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            roomId: room?._id,
            checkIn: '',
            checkOut: ''
        },
        onSubmit: values => dispatch(bookingRoom(values, room?._id))
    })
    const { setFieldValue, handleSubmit, handleChange, values } = formik

    let price = room?.price
    let days = moment(values.checkOut, 'YYYY-MM-DD').diff(moment(values.checkIn, 'YYYY-MM-DD'), 'days')
    let guests = adult + child + infant
    return (
        <form onSubmitCapture={handleSubmit} ref={myRef}>
            <div className='rounded-xl border border-gray-100 shadow-md px-4 py-2'>
                <div className='flex justify-between items-center mt-2'>
                    <div>
                        <span className='mr-1 text-2xl font-medium'>{room?.price}</span>
                        <span>/ đêm</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <FaStar fill='red' />
                        <span className='text-sm'>5,0</span>
                        <span className='ml-1 text-gray-500 underline text-sm'>(10 đánh giá)</span>
                    </div>
                </div>

                <div className='mt-3 rounded-md' style={{ border: '1px solid gray' }}>
                    <div className='grid grid-cols-2' style={{ borderBottom: '1px solid gray' }}>
                        <ul className='pl-3 translate-y-1/4'>
                            <li className='text-sm font-medium -mb-1'>NHẬN PHÒNG</li>
                            <li className='text-sm -ml-3'>
                                <DatePicker bordered={false} format="DD/MM/YYYY" placeholder='Chọn ngày' suffixIcon={null}
                                    name="checkIn" onChange={(value) => {
                                        let localTime = moment(value).format('YYYY-MM-DD')
                                        let proposeTime = localTime + "T00:00:00.000Z"
                                        setFieldValue('checkIn', proposeTime)
                                    }} />
                            </li>
                        </ul>
                        <div style={{ borderLeft: '1px solid gray' }}>
                            <ul className='pl-3 translate-y-1/4'>
                                <li className='text-sm font-medium -mb-1'>TRẢ PHÒNG</li>
                                <li className='text-sm -ml-3'>
                                    <DatePicker bordered={false} format="DD/MM/YYYY" placeholder='Chọn ngày' suffixIcon={null}
                                        name='checkOut' onChange={(value) => {
                                            let localTime = moment(value).format('YYYY-MM-DD')
                                            let proposeTime = localTime + "T00:00:00.000Z"
                                            setFieldValue('checkOut', proposeTime)
                                        }}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='flex justify-between items-center px-3' data-toggle="collapse" data-target="#collapseExample">
                        <ul className='translate-y-1/4'>
                            <li className='text-sm font-medium mb-0'>KHÁCH</li>
                            <li className='text-sm'>
                                <input className='focus:outline-none' type='text' name='guests' value={adult + child + infant + 1 + ' khach'}
                                    onChange={handleChange} />
                            </li>
                        </ul>
                        <DownOutlined />
                    </div>

                    <div className="collapse shadow-sm w-full p-3" id="collapseExample">
                        <div className='grid grid-cols-2 gap-24'>
                            <div className='flex flex-col'>
                                <span className='font-medium'>Người lớn</span>
                                <span className='text-sm font-light'>Trên 13 tuổi</span>
                            </div>

                            <div className='flex justify-center items-center relative'>
                                <button type='button' className='text-2xl focus:outline-none absolute left-0'
                                    onClick={() => dispatch({
                                        type: 'ADULT',
                                        payload: false
                                    })}><MinusCircleOutlined /></button>
                                <span className='px-2.5 -mb-1'>{adult + 1}</span>
                                <button type='button' className='text-2xl focus:outline-none absolute right-0'
                                    onClick={() => dispatch({
                                        type: 'ADULT',
                                        payload: true
                                    })} ><PlusCircleOutlined /></button>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-24 my-2'>
                            <div className='flex flex-col'>
                                <span className='font-medium'>Trẻ em</span>
                                <span className='text-sm font-light'>Từ 2-12 tuổi</span>
                            </div>

                            <div className='flex justify-center items-center relative'>
                                <button type='button' className='text-2xl focus:outline-none absolute left-0'
                                    onClick={() => dispatch({
                                        type: 'CHILD',
                                        payload: false
                                    })}><MinusCircleOutlined /></button>
                                <span className='px-2.5 -mb-2'>{child}</span>
                                <button type='button' className='text-2xl focus:outline-none absolute right-0'
                                    onClick={() => dispatch({
                                        type: 'CHILD',
                                        payload: true
                                    })} ><PlusCircleOutlined /></button>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-24 my-2'>
                            <div className='flex flex-col'>
                                <span className='font-medium'>Trẻ sơ sinh</span>
                                <span className='text-sm font-light'>Dưới 2 tuổi</span>
                            </div>

                            <div className='flex justify-center items-center relative'>
                                <button type='button' className='text-2xl focus:outline-none absolute left-0'
                                    onClick={() => dispatch({
                                        type: 'INFANT',
                                        payload: false
                                    })}><MinusCircleOutlined /></button>
                                <span className='px-2.5 -mb-2'>{infant}</span>
                                <button type='button' className='text-2xl focus:outline-none absolute right-0'
                                    onClick={() => dispatch({
                                        type: 'INFANT',
                                        payload: true
                                    })} ><PlusCircleOutlined /></button>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 items-center gap-24 my-2'>
                            <div className='flex flex-col'>
                                <span className='font-medium'>Thú cưng</span>
                                <span className='text-sm font-light'>Tuỳ thuộc</span>
                            </div>
                            <div className='-translate-y-1/4 flex justify-center items-center relative'>
                                <button className='text-2xl text-gray-300 absolute left-0' disabled={true}><MinusCircleOutlined /></button>
                                <span className='px-2.5 -mb-2 text-gray-300'>0</span>
                                <button className='text-2xl text-gray-300 absolute right-0' disabled={true}><PlusCircleOutlined /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <button type='submit' className='rounded-lg my-3 h-12 w-full bg-gradient-to-r from-red-500 to-rose-600 hover:bg-gradient-to-l transition-all duration-300
                                text-white font-bold focus:outline-none'
                    onClick={() => myRef.current.reset()}>Đặt phòng</button>
                <p className='font-light text-center text-sm'>Bạn vẫn chưa bị trừ tiền</p>


                <div className='flex justify-between'>
                    <span className='underline'>{price} x {days ? days : 0} đêm</span>
                    <span>{price * days ? price * days : 0}</span>
                </div>

                <div className='flex justify-between'>
                    <span className='underline'>Phí dịch vụ</span>
                    <span className='text-danger'>100000</span>
                </div>
                <div className='flex justify-between mt-3 pt-3 border-t-2 '>
                    <p className='font-bold'>Tổng</p>
                    <p className='font-bold'>{(price * days ? price * days : 0) * guests + 100000}</p>
                </div>
            </div>
        </form >
    )
}
