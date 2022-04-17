import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo, uploadPhoto } from '../../../redux/actions/UserInfo'

export default function UserInfo(props) {
    const { id } = props.match.params
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserInfo(id))
    }, [])

    const { userInfo } = useSelector(state => state.UserInfo_Reducer)
    console.log(userInfo)

    //UPLOAD PHOTO
    const handleChange = (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('avatar', file)

        dispatch(uploadPhoto(formData, userInfo?._id))
    }


    return (
        <section>
            <div className='mx-auto pt-32 mb-5 flex gap-20' style={{ width: '85%' }}>
                {/* LEFT */}
                <div className='w-1/4 border-2 rounded-2xl p-4 shadow-md'>
                    <div className='flex flex-col items-center justify-center'>
                        <img className=" w-32 h-32 rounded-full object-cover" src={userInfo?.avatar} alt='' />
                        <label className='mt-2 cursor-pointer underline'>
                            Upload Photo
                            <input type='file' style={{ display: 'none' }} accept='image/jpeg, image/png, image/jpg'
                                onChange={(e) => handleChange(e)} />
                        </label>
                    </div>

                    <div className='flex items-center gap-2 mt-6 border-b-2 pb-8'>
                        <img className='w-4' src='/img/security-check.svg' alt='' />
                        <span className='text-xl font-medium'>Identity verified</span>
                    </div>

                    <div>
                        <p className='my-4 font-semibold text-3xl'>{userInfo?.name.length > 5
                            ? userInfo?.name.substr(0, 5) + '...'
                            : userInfo?.name} confirmed</p>
                        <div className='flex items-center gap-2'>
                            <i className="fa fa-check"></i>
                            <span>Identity</span>
                        </div>
                        <div className='flex items-center gap-2 my-3'>
                            <i className="fa fa-check"></i>
                            <span>Email address</span>
                        </div>
                        <div className='flex items-center gap-2 mb-4'>
                            <i className="fa fa-check"></i>
                            <span>Phone number</span>
                        </div>
                        <div className='pr-8'>
                            <span className='font-medium underline cursor-pointer'>Learn more</span>
                            <span> about how confirming account info helps keep the Airbnb community secure.</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className='w-3/4'>
                    <p className='font-bold text-4xl mb-2'>Xin chao, toi la Phong</p>
                    <p className='text-gray-500 text-sm'>
                        Bat dau tham gia vao 2021
                    </p>
                    <button className='font-medium underline focus:outline-none'>Chinh sua ho so</button>
                    <p className='mt-12 mb-8 text-2xl font-semibold'>About</p>
                    <p className='my-8'></p>

                    <div className='flex items-center gap-2 mb-2'>
                        <i className="fa fa-check"></i>
                        <span>Lives in {userInfo?.address}</span>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <i className="fa fa-check"></i>
                        <span>Speak English</span>
                    </div>
                    <div className='flex items-center gap-2 mb-2'>
                        <i className="fa fa-check"></i>
                        <span>Work: Front End</span>
                    </div>

                    <div className='flex items-center gap-2 my-8 py-8 border-b-2 border-t-2'>
                        <i className="fa fa-check"></i>
                        <span className='text-2xl font-semibold'>0 reviews</span>
                    </div>
                    <p className='text-gray-500 underline border-b-2 pb-8'>Reviews by you</p>
                </div>
            </div>
        </section>
    )
}
