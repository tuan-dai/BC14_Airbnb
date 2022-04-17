import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { DeleteFilled, EditFilled, SearchOutlined } from '@ant-design/icons/lib/icons'
import { MdAddCircleOutline } from 'react-icons/md';
import { IoLocationSharp } from 'react-icons/io5';


import { Input, Table } from 'antd'
import { deleteLocation, getLocation, uploadPhotoLocation } from '../../../redux/actions/Location'
import Swal from 'sweetalert2'


export default function LocationManagement() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLocation())
    }, [])
    const { listLocation, keyword } = useSelector(state => state.Location_Reducer)
    let arr = listLocation?.filter(location => location?.name?.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)

    const data = arr
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
            },
            render: text => <a>{text}</a>,
        },
        {
            title: 'Image',
            dataIndex: 'image',
            render: (text, record) => (
                record?.image
                    ? <label className='cursor-pointer -mb-1'>
                        <img className='w-28 h-20 object-cover rounded-lg'
                            src={record?.image} alt='' />
                        <input type='file' style={{ display: 'none' }} accept='image/jpg && image/png && /image/jpeg'
                            onChange={e => {
                                const file = e.target.files[0]
                                const formData = new FormData()
                                formData.append('location', file)
                                dispatch(uploadPhotoLocation(record?._id, formData))
                            }} />
                    </label>
                    : <label className='cursor-pointer inline-flex'>
                        Upload Image
                        <input type='file' style={{ display: 'none' }} accept='image/jpg && image/png && /image/jpeg'
                            onChange={e => {
                                const file = e.target.files[0]
                                const formData = new FormData()
                                formData.append('location', file)
                                dispatch(uploadPhotoLocation(record?._id, formData))
                            }} />
                    </label>
            ),
            responsive: ['md']
        },
        {
            title: 'Province',
            dataIndex: 'province',
            sorter: {
                compare: (a, b) => a.province.localeCompare(b.province),
            },
            render: (text, record) => <span>{record?.province}</span>,
            responsive: ['sm']
        },
        {
            title: 'Valueate',
            dataIndex: 'valueate',
            sorter: {
                compare: (a, b) => a.valueate - b.valueate,
            },
            width: '10%',
            render: (text, record) => <span>{record?.valueate}</span>,
            responsive: ['md']
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div className='flex items-center gap-6'>
                    <NavLink className='btn btn-info inline-flex' to={`/admin/room-management/${record?._id}`}>Xem chi tiet</NavLink>
                    <NavLink to={`/admin/location-management/update-location/${record?._id}`} className='btn btn-primary'>
                        <EditFilled className='-translate-y-1' />
                    </NavLink>
                    <button className='btn btn-danger'
                        onClick={() => Swal.fire({
                            title: 'Are you sure to delete this location?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(deleteLocation(record?._id))
                            }
                        })
                        }><DeleteFilled className='-translate-y-1' /></button>
                </div>
            ),
        },
    ];

    const { Search } = Input;
    return (
        <div>
            <div className='flex items-baseline gap-2'>
                <IoLocationSharp className='sm:text-2xl lg:text-xl text-blue-900' />
                <p className='sm:text-2xl md:text-3xl mb-0 text-blue-900 font-semibold'>Location Management</p>
            </div>

            <div className='my-3 md:flex justify-between items-center'>
                <NavLink to='/admin/location-management/create-location' className='btn btn-success'>
                    <div className='flex items-center gap-1'>
                        <MdAddCircleOutline />
                        <span>Add Location</span>
                    </div>
                </NavLink>
                <Search
                    style={{ width: 300 }}
                    placeholder="Nhap vao dia diem"
                    enterButton={<SearchOutlined />}
                    size="medium"
                    onSearch={value => dispatch({
                        type: 'SEARCH_LOCATION',
                        payload: value
                    })}
                />
            </div>

            < Table columns={columns} dataSource={data} />
        </div>
    )
}
