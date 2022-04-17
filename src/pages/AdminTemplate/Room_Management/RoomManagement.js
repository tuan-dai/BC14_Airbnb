import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input, Table, Tooltip } from 'antd';
import { deleteRoom, getListRoomLocation, uploadImageRoom } from '../../../redux/actions/ListRoomLocation';

import { NavLink } from 'react-router-dom';
import { DeleteFilled, EditFilled, SearchOutlined } from '@ant-design/icons';
import { MdAddCircleOutline, MdOutlineRateReview } from 'react-icons/md';
import { IoIosBed } from 'react-icons/io';

import { ReactComponent as Logo } from '../../../assets/comfortable.svg'
import Swal from 'sweetalert2';
import ComfortableModal from './ComfortableModal';

export default function RoomManagement(props) {
    const { locationId } = props.match.params
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getListRoomLocation(locationId))
    }, [])
    const { listRoom } = useSelector(state => state.ListRoomLocation_Reducer)
    const { keyword } = useSelector(state => state.RoomDetail_Reducer)

    const filterRoom = listRoom?.filter(room => room?.name?.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
    const data = filterRoom
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
            sortDirections: ['descend'],
        },
        {
            title: 'Image',
            dataIndex: 'image',
            defaultSortOrder: 'descend',
            render: (text, record) => (
                <label className='cursor-pointer -mb-1'>
                    <img className='w-28 h-20 object-cover rounded-lg'
                        src={record?.image ? record?.image : 'https://picsum.photos/200/300'} alt='' />
                    <input type='file' style={{ display: 'none' }} onChange={e => {
                        const file = e.target.files[0]
                        const formData = new FormData()
                        formData.append('room', file)
                        dispatch(uploadImageRoom(record?._id, formData, locationId))
                    }} />
                </label>
            ),
            responsive: ['lg']
        },
        {
            title: 'Description',
            dataIndex: 'description',
            render: (text, record) => (
                <span>{
                    record?.description.length > 50
                        ? record?.description.substr(0, 50) + '...' : record?.description}
                </span>),
            responsive: ['md']
        },
        {
            title: 'Review',
            dataIndex: 'review',
            render: (text, record) => (
                <NavLink to={`/admin/review-management/${record?._id}`}>
                    <Tooltip placement="right" title='View All Review' color='blue'>
                        <MdOutlineRateReview className='text-3xl text-blue-400' />
                    </Tooltip>
                </NavLink>
            )
        },
        {
            title: 'Price',
            dataIndex: 'price',
            sorter: (a, b) => a.price - b.price,
            render: (text, record) => (<span>{record?.price}</span>),
            responsive: ['md']
        },
        {
            title: 'Comfortable',
            key: 'comfortable',
            render: (text, record) => (
                <Tooltip placement="right" title='View All Comfortable' color='blue'>
                    <Logo className='w-10 h-auto cursor-pointer' fill='#00adef'
                        data-toggle="modal" data-target="#ComfortableModal" onClick={() =>
                            dispatch({
                                type: 'GET_ROOMID',
                                payload: record?._id
                            })}
                    />
                </Tooltip>
            )
        },
        {
            title: 'Guests',
            dataIndex: 'guests',
            sorter: (a, b) => a.guests - b.guests,
            render: (text, record) => (<span>{record?.guests}</span>),
            responsive: ['lg']
        },
        {
            title: 'Bedrooms',
            dataIndex: 'bedRoom',
            sorter: (a, b) => a.bedRoom - b.bedRoom,
            render: (text, record) => (<span>{record?.bedRoom}</span>),
            responsive: ['lg']
        },
        {
            title: 'Bathrooms',
            dataIndex: 'bath',
            sorter: (a, b) => a.bath - b.bath,
            render: (text, record) => (<span>{record?.bath}</span>),
            responsive: ['lg']
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div className='flex items-center gap-4'>
                    <NavLink className='text-2xl' to={`/admin/room_management/update-room/${record?._id}`} className='btn btn-primary'>
                        <EditFilled className='-translate-y-1' />
                    </NavLink>

                    <button className='btn btn-danger' onClick={() => {
                        Swal.fire({
                            title: 'Are you sure to delete this room?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(deleteRoom(record?._id, locationId))
                            }
                        })
                    }}><DeleteFilled className='-translate-y-1' />
                    </button>
                </div>
            )
        },
    ];

    const { Search } = Input;
    return (
        <>
            <div className='flex items-baseline gap-3'>
                <IoIosBed className='sm:text-2xl lg:text-xl text-blue-900' />
                <p className='sm:text-2xl md:text-3xl mb-0 text-blue-900 font-semibold'>Room Management</p>
            </div>

            <div className='md:flex justify-between items-center my-3'>
                <NavLink to={`/admin/room-management/create-room/${locationId}`} className='btn btn-success'>
                    <div className='flex items-center gap-1'>
                        <MdAddCircleOutline />
                        <span>Add Room</span>
                    </div>
                </NavLink>
                <Search
                    style={{ width: 300 }}
                    placeholder="Nhap ten phong"
                    allowClear
                    enterButton={<SearchOutlined className='pb-2' />}
                    size="medium"
                    onSearch={value => dispatch({
                        type: 'SEARCH_ROOM',
                        value
                    })}
                />
            </div>
            <Table columns={columns} dataSource={data} />
            <ComfortableModal />
        </>
    )
}
