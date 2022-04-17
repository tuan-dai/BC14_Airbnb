import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getLocation } from '../../../redux/actions/Location';
import './Home.css'

export default function Home(props) {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLocation())
    }, [])

    const { listLocation } = useSelector(state => state.Location_Reducer)

    const renderLocation = () => {
        return listLocation?.map((item, index) => {
            return (
                <div key={index} className='flex items-center gap-3 mb-4 cursor-pointer'
                    onClick={() => props.history.push(`/homes/${item?._id}`)}>
                    <img className='rounded-lg w-16 h-16' src={item.image ? item.image : 'https://picsum.photos/241/200'} alt='' />
                    <ul className='mb-0'>
                        <li className='font-medium'>{item.province}</li>
                        <li>15 phút lái xe</li>
                    </ul>
                </div>
            )
        })
    }

    return (
        <div>
            {/* SLIDER */}
            <div className='bg-black sm:py-0 lg:py-16'>
                <div id="carouselBnB" className="carousel slide" data-ride="carousel">
                    <div style={{ width: '85%' }} className="carousel-inner mx-auto home-slider">
                        <div className="carousel-item active mt-20">
                            <img style={{ height: '48rem' }} className="slider-image rounded-xl d-block w-full object-cover mx-auto" src="https://i.picsum.photos/id/1035/5854/3903.jpg?hmac=DV0AS2MyjW6ddofvSIU9TVjj1kewfh7J3WEOvflY8TM" alt="First slide" />
                            <div class="carousel-caption">
                                <p className='font-bold text-white sm:text-2xl lg:text-4xl mb-0'>Bạn chưa biết nên đi đâu?</p>
                                <p className='font-bold text-white sm:text-2xl lg:text-4xl'>Tuyệt!</p>
                                <button className='rounded-full bg-white hover:bg-gray-300 px-4 py-2 mt-3 mb-4 focus:outline-none'>
                                    <span className='bg-gradient-to-r from-violet-800 to-violet-400 bg-clip-text text-transparent
                                    text-md font-bold'>Tìm kiếm linh hoạt</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

            <div className='mx-auto my-5' style={{ width: '85%' }}>
                <p className='sm:text-3xl lg:text-5xl'>Khám phá những điểm đến gần đây</p>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 mt-4'>
                    {renderLocation()}
                </div>
            </div>

            <div className='mx-auto my-5' style={{ width: '85%' }}>
                <p className='sm:text-3xl lg:text-5xl'>Ở bất cứ đâu</p>
                <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4'>
                    <div>
                        <img className='rounded-xl' src='https://picsum.photos/id/239/400' alt='' />
                        <p className='mt-2 font-medium'>Toàn bộ nhà</p>
                    </div>
                    <div>
                        <img className='rounded-xl' src='https://picsum.photos/id/241/400' alt='' />
                        <p className='mt-2 font-medium'>Chỗ ở độc đáo</p>
                    </div>
                    <div>
                        <img className='rounded-xl' src='https://picsum.photos/id/243/400' alt='' />
                        <p className='mt-2 font-medium'>Trang trại và thiên nhiên</p>
                    </div>
                    <div>
                        <img className='rounded-xl' src='https://picsum.photos/id/237/400' alt='' />
                        <p className='mt-2 font-medium'>Cho phép mang theo thú cưng</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
