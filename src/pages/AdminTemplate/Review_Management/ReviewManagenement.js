import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Input, Table } from 'antd';

import { DeleteFilled, EditFilled, SearchOutlined } from '@ant-design/icons';
import { MdRateReview, MdAddCircleOutline } from 'react-icons/md';

import Swal from 'sweetalert2';
import { deleteReview, getReviewRoom } from '../../../redux/actions/Review';
import { getReviewDetail } from '../../../redux/actions/ReviewDetail';
import UpdateReview from './UpdateReview';
import CreateReview from './CreateReview';


export default function ReviewManagement(props) {
    const { roomId } = props.match.params

    const myRef = useRef(null)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReviewRoom(roomId))
    }, [])

    const { listReview } = useSelector(state => state.Review_Reducer)
    const data = listReview

    const { reviewDetail } = useSelector(state => state.ReviewDetail_Reducer)

    const columns = [
        {
            title: 'Room Name',
            key: 'roomName',
            render: (text, record) => (
                <span>{record?.roomId?.name}</span>
            ),
        },
        {
            title: 'User Name',
            key: 'userName',
            width: '12rem',
            render: (text, record) => (
                <span>{record?.userId?.name}</span>
            )
        },
        {
            title: 'Image',
            key: 'image',
            width: '12rem',
            render: (text, record) => (
                <img className='w-28 h-20 object-cover rounded-lg'
                    src={record?.roomId.image} alt='' />
            ),
            responsive: ['md']
        },
        {
            title: 'Description',
            key: 'description',
            render: (text, record) => (
                <span>{record?.roomId?.description}</span>
            )
        },
        {
            title: 'Review',
            dataIndex: 'content',
            render: (text, record) => (
                <span>{record?.content}</span>
            )
        },

        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <div className='flex items-center gap-4'>
                    <button className='btn btn-primary' data-toggle="modal" data-target="#modalUpdateReview"
                        onClick={() => {
                            dispatch(getReviewDetail(record?._id))
                        }}>
                        <EditFilled className='-translate-y-1' />
                    </button>

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
                                dispatch(deleteReview(record?._id, roomId))
                            }
                        })
                    }}><DeleteFilled className='-translate-y-1' />
                    </button>
                </div>
            )
        },
    ];


    return (
        <div>
            <div className='flex items-baseline gap-3'>
                <MdRateReview className='sm:text-2xl lg:text-xl text-blue-900' />
                <p className='text-3xl mb-3 text-blue-900 font-medium'>Review Management</p>
            </div>

            <button className='btn btn-success mb-4' data-toggle="modal" data-target="#modalCreateReview">
                <div className='flex items-center gap-1'>
                    <MdAddCircleOutline />
                    <span>Add Review</span>
                </div>
            </button>
            <Table columns={columns} dataSource={data} />
            <CreateReview roomId={roomId} />
            <UpdateReview reviewDetail={reviewDetail} />
        </div>
    )
}
