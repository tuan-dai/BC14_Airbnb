import { Progress } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import moment from 'moment'
import { getReviewRoom } from '../../../../redux/actions/Review'


export default function Comment(props) {
    const { id } = props
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getReviewRoom(id))
    }, [])

    const { listReview } = useSelector(state => state.Review_Reducer)

    const renderTableComment = () => {
        return listReview?.map(item => {
            return (
                <div key={item._id} className='mr-24 mb-4'>
                    <div className='d-flex gap-3 mt-2'>
                        <img className='w-12 h-12 rounded-full object-cover' src={item?.userId.avatar} alt="" />
                        <ul>
                            <li className='font-medium -mb-0'>{item?.userId.name}</li>
                            <li className='text-gray-500 text-sm'>tháng {moment(item?.updatedAt).format('MM')} năm {moment(item?.updatedAt).format('YYYY')}</li>
                        </ul>
                    </div>
                    <p style={{ fontSize: '1rem' }} className='font-light'>{item?.content.length > 100 ? item?.content.substr(0, 100) + '...' : item?.content}</p>
                </div>)

        })
    }

    return (
        <div className='mb-6 py-12 border-t'>
            <div className='flex items-center'>
                <i className="fa fa-star text-red-500"></i>
                <span className='ml-2 text-lg font-medium'>4,83 (18 đánh giá)</span>
            </div>

            <div className='grid grid-cols-2 justify-between mb-6'>
                {/* THANG DANH GIA */}
                <div className='mr-24'>
                    <div className='flex justify-between mt-3'>
                        <p className='font-light'>Mức độ sạch sẽ</p>
                        <div className='flex gap-2'>
                            <Progress percent={97} strokeColor="black" strokeWidth="5px" showInfo={false} style={{ width: '9rem' }} />
                            <p>4.8</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-light'>Liên lạc</p>
                        <div className='flex gap-2'>
                            <Progress percent={98} strokeColor="black" strokeWidth="5px" showInfo={false} style={{ width: '9rem' }} />
                            <p>4.9</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-light'>Nhận phòng</p>
                        <div className='flex gap-2'>
                            <Progress percent={95} strokeColor="black" strokeWidth="5px" showInfo={false} style={{ width: '9rem' }} />
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between mt-3'>
                        <p className='font-light'>Độ chính xác</p>
                        <div className='flex gap-2'>
                            <Progress percent={98} strokeColor="black" strokeWidth="5px" showInfo={false} style={{ width: '9rem' }} />
                            <p>4.8</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-light'>Vị trí</p>
                        <div className='flex gap-2'>
                            <Progress percent={99} strokeColor="black" strokeWidth="5px" showInfo={false} style={{ width: '9rem' }} />
                            <p>4.9</p>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='font-light'>Giá trị</p>
                        <div className='flex gap-2'>
                            <Progress percent={97} strokeColor="black" strokeWidth="5px" showInfo={false} style={{ width: '9rem' }} />
                            <p>4.7</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* COMMENT */}
            <div className='grid grid-cols-2 justify-between w-full'>
                {renderTableComment()}
            </div>
            <button className='text-lg font-medium rounded-md border-2 border-black hover:bg-gray-100 px-4 py-2'>Hiển thị tất cả 10 đánh giá</button>

        </div>


    )
}
