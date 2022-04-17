import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { Input, Table, Avatar } from 'antd';
import { DeleteFilled, EditFilled, SearchOutlined } from '@ant-design/icons';
import { MdAddCircleOutline } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

import { deleteUser, getUserPagination } from '../../../redux/actions/UserManagement';
import { SEARCH_USER } from '../../../redux/types/UserManagement';
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { uploadPhoto } from '../../../redux/actions/UserInfo';

export default function UserManagement() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserPagination())
    }, [])

    const { listUser, keyword } = useSelector(state => state.UserManagement_Reducer)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => a.name.localeCompare(b.name),
            },
        },
        {
            title: 'Birthday',
            key: 'birthday',
            render: (text, user) => (
                <span>{moment(user.birthday).format('DD/MM/YYYY')}</span>
            ),
            responsive: ['lg']
        },
        {
            title: 'Avatar',
            key: 'avatar',
            render: (text, user) => (
                <label className='cursor-pointer'>
                    <Avatar
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        icon={<img className='w-20 h-20  rounded-full object-cover' src={user.avatar ? user.avatar : 'https://picsum.photos/200'} alt='' />}
                    />,

                    <input style={{ display: 'none' }} type='file' accept='image/jpg, image/png, image/jpeg'
                        onChange={e => uploadAvatar(e, user)} />
                </label>
            ),
            responsive: ['md']
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            sorter: { compare: (a, b) => a.phone - b.phone },
            responsive: ['md']
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: {
                compare: (a, b) => a.email.localeCompare(b.email),
            },
            responsive: ['sm']
        },
        {
            title: 'Address',
            dataIndex: 'address',
            responsive: ['md']
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div className='flex items-center gap-4'>
                    <NavLink to={`/admin/user-management/edituser/${record._id}`} className='btn btn-primary'>
                        <EditFilled className='-translate-y-1' />
                    </NavLink>

                    <button className='btn btn-danger' onClick={() =>
                        Swal.fire({
                            title: 'Are you sure to delete this user?',
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                dispatch(deleteUser(record._id))
                                Swal.fire(
                                    'Deleted!',
                                    'Your file has been deleted.',
                                    'success'
                                )
                            }
                        })
                    }>
                        <DeleteFilled className='-translate-y-1' />
                    </button>
                </div>
            ),
        },
    ];
    const newListUser = listUser?.filter(user => user?.name?.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
    const data = newListUser

    //SEARCH USER
    const { Search } = Input;
    const onSearch = value => {
        dispatch({
            type: SEARCH_USER,
            value
        })
    };

    //UPLOAD AVATAR
    const uploadAvatar = (e, user) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('avatar', file)

        dispatch(uploadPhoto(formData, user._id))
    }

    return (
        <div>
            <div className='flex items-baseline gap-3 mb-0'>
                <FaUser className='sm:text-2xl lg:text-xl text-blue-900' />
                <p className='mb-0 sm:text-2xl md:text-3xl text-blue-900 font-semibold'>User Management</p>
            </div>

            <div className='mt-3 mb-4 md:flex justify-between items-center'>
                <NavLink to='/admin/user-management/adduser' className='btn btn-success'>
                    <div className='flex items-center gap-1'>
                        <MdAddCircleOutline />
                        <span>Add User</span>
                    </div>
                </NavLink>
                <Search
                    placeholder="Nhap vao ho ten nguoi dung"
                    allowClear
                    enterButton={<SearchOutlined className='pb-2' />}
                    size="medium"
                    style={{ width: 300 }}
                    onSearch={onSearch}
                />
            </div>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
