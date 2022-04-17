import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import *as Yup from 'yup';
import { signIn } from '../../../redux/actions/User';

export default function SignIn(props) {
    const dispatch = useDispatch()
    const closeRef = useRef(null)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values => dispatch(signIn(values, props.history)),
        validationSchema: Yup.object({
            email: Yup.string().required('Email is required').email('Invalid Email'),
            password: Yup.string().required('Password is required').min(4, 'Too short')
        })
    })
    const { handleChange, handleSubmit, errors, touched } = formik

    return (
        <div className="modal fade" id="signInModal" tabindex="-1" aria-labelledby="signInModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content rounded-xl text-black">
                    <div className="modal-header">
                        <h5 className="modal-title ml-44 font-bold text-xl" id="signInModal">Đăng nhập</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" ref={closeRef}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    {/* BODY */}
                    <form onSubmitCapture={handleSubmit}>
                        <div className="modal-body mx-3">
                            <p className='text-2xl font-medium mt-2'>Chào mừng bạn đến với Airbnb</p>
                            <div className='form-group'>
                                <input className='form-control mt-4' type='email' placeholder='Email' name='email' onChange={handleChange} />
                                {errors.email && touched.email && <p className='text-red-500 ml-1'>{errors.email}</p>}
                            </div>
                            <div className='form-group'>
                                <input className='form-control' type='password' placeholder='Mat khau' name='password' onChange={handleChange} />
                                {errors.password && touched.password && <p className='text-red-500 ml-1'>{errors.password}</p>}
                            </div>
                            <p className='text-sm font-light'>Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số điện thoại. Có áp dụng phí dữ liệu và phí tin nhắn tiêu chuẩn.
                                <span className='font-bold underline cursor-pointer'>Chính sách về quyền riêng tư</span></p>
                            <div className='form-group mt-4'>
                                <button type='submit' className='w-full py-2 rounded-md bg-gradient-to-r from-red-500 to-rose-500 hover:bg-gradient-to-l transition-all duration-500
                                text-white text-xl font-medium'> Đăng nhập</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}
