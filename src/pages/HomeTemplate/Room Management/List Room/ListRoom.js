import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { getListRoomLocation } from '../../../../redux/actions/ListRoomLocation';
import './ListRoom.css'

export default function ListRoom(props) {
    const id = props.match.params.locationId

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListRoomLocation(id))
    }, [])

    const { listRoom } = useSelector(state => state.ListRoomLocation_Reducer)

    const renderRoom = () => {
        return listRoom?.map((room, index) => {
            return <div key={index} className='flex gap-4 relative border-b py-4 cursor-pointer'
                onClick={() => { props.history.push(`/rooms/${room._id}`) }}>
                <img className='rounded-xl w-1/3 object-cover' src={room.image ? room.image : 'https://picsum.photos/300/200'} alt='' />
                <div>
                    <HeartOutlined className='text-2xl absolute right-0 top-4' />
                    <p className='text-gray-500'>{room.name}</p>
                    <p className='text-xl'>
                        {room.description.length > 100 ? room.description.substr(0, 100) + '...' : room.description}
                    </p>
                    <p className='border-b w-6 my-2'></p>
                    <p className='text-gray-500'>{room.guests} khách · {room.bedRoom} phòng ngủ · {room.bath} phòng tắm</p>
                    <p className='text-xl absolute right-0 bottom-0' >
                        <span className='font-bold'>{room.price} VND / </span>
                        <span>ngày</span>
                    </p>
                </div>
            </div>
        })
    }

    return (
        <div className='container-fluid'>
            <div className='mt-28 ml-3 mb-4'>
                <Button className='mr-2' shape="round" size='large'>Huỷ miễn phí</Button>
                <Button className='mr-2' shape="round" size='large'>Wifi</Button>
                <Button className='mr-2' shape="round" size='large'>Bếp</Button>
                <Button className='mr-2' shape="round" size='large'>Điều hoà nhiệt độ</Button>
                <Button className='mr-2' shape="round" size='large'>Máy giặt</Button>
                <Button className='mr-2' shape="round" size='large'>Bàn là</Button>
                <Button className='mr-2' shape="round" size='large'>Không gian riêng để làm việc</Button>
                <Button className='mr-2' shape="round" size='large'>Chỗ để xe miễn phí</Button>
                <Button className='mr-2' shape="round" size='large'>Máy sấy quần áo</Button>
                <Button className='mr-2' shape="round" size='large'>Tủ nhận phòng</Button>
                <Button className='mr-2' shape="round" size='large'>Bể bơi</Button>
                <Button className='mr-2' shape="round" size='large'>Phòng tập thể hình</Button>
            </div>
            {/* LEFT */}
            <div className='flex gap-6'>
                <div className='ml-3 w-1/2 list-room' >
                    <p className='mb-1'>Hơn 300 chỗ ở · 16 tháng 4 - 14 tháng 5</p>
                    <h3 className='font-semibold border-b pb-3'>Chỗ ở tại khu vực bản đồ đã chọn</h3>
                    {renderRoom()}

                </div>

                {/* RIGHT */}
                <div className='w-1/2 location-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62860.62274104894!2d105.7225507462918!3d10.034269633271379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0629f6de3edb7%3A0x527f09dbfb20b659!2zQ2FuIFRobywgTmluaCBLaeG7gXUsIEPhuqduIFRoxqEsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1640412826561!5m2!1sen!2s"
                        className='w-full h-full ' allowFullScreen loading="lazy" />

                </div>
            </div>
        </div>
    )
}
