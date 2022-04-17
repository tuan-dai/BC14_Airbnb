import React from 'react'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import *as Yup from 'yup';
import moment from 'moment';
import { signUp } from '../../../redux/actions/User';

export default function SignUp() {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            phone: '',
            birthday: '',
            gender: true,
            address: ''
        },
        onSubmit: values => dispatch(signUp(values)),
        validationSchema: Yup.object({
            name: Yup.string().required('* Ho ten khong duoc trong'),
            email: Yup.string().required('* Email khong duoc trong').email('* Invalid Email'),
            password: Yup.string().required('* Mat khau khong duoc trong').min(5, '* Mat khau qua ngan'),
            phone: Yup.string().required('* So dien thoai khong duoc trong'),
            birthday: Yup.string().required('* Ngay sinh khong duoc trong'),
            address: Yup.string().required('* Dia chi khong duoc trong')
        })
    })
    const { handleChange, handleSubmit, setFieldValue, errors, touched, dirty } = formik


    return (
        <div className="modal fade" id="signUpModal" tabindex="-1" aria-labelledby="signUpModal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content rounded-xl text-black">
                    <div className="modal-header">
                        <h5 className="modal-title ml-44 font-bold text-xl" id="signInModal">Đăng ký</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>

                    {/* BODY */}
                    <form onSubmitCapture={handleSubmit}>
                        <div className="modal-body mx-3">
                            <p className='text-2xl font-medium mt-2'>Chào mừng bạn đến với Airbnb</p>
                            <div className='form-group'>
                                <input className='form-control bg-gray-100 border-none mt-4' type='text' placeholder='Ho ten' name='name' onChange={handleChange} />
                                {errors.name && touched.name && <p className='text-red-500 ml-2'>{errors.name}</p>}
                            </div>
                            <div className='form-group'>
                                <input className='form-control bg-gray-100 border-none' type='email' placeholder='Email' name='email' onChange={handleChange} />
                                {errors.email && touched.email && <p className='text-red-500 ml-2'>{errors.email}</p>}
                            </div>
                            <div className='form-group'>
                                <input className='form-control bg-gray-100 border-none' type='password' placeholder='Mat khau' name='password' onChange={handleChange} />
                                {errors.password && touched.password && <p className='text-red-500 ml-2'>{errors.password}</p>}
                            </div>
                            <div className='form-group'>
                                <input className='form-control bg-gray-100 border-none' type='number' placeholder='So dien thoai' name='phone' onChange={handleChange} />
                                {errors.phone && touched.phone && <p className='text-red-500 ml-2'>{errors.phone}</p>}
                            </div>
                            <div className='form-group'>
                                <input className="form-control bg-gray-100 border-none w-full py-2" type='date' placeholder='Ngay sinh' name='birthday' onChange={(value) => setFieldValue('birthday', moment(value).format('YYYY/MM/DD'))} />
                            </div>
                            <div className='form-group'>
                                <select className='form-control bg-gray-100 border-none' name='gender' onChange={handleChange}>
                                    <option value='true'>Nam</option>
                                    <option value='false'>Nu</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <input className='form-control bg-gray-100 border-none' type='text' placeholder='Dia chi' name='address' onChange={handleChange} />
                                {errors.address && touched.address && <p className='text-red-500 ml-2'>{errors.address}</p>}
                            </div>
                            <p className='text-sm font-light'>Chúng tôi sẽ gọi điện hoặc nhắn tin cho bạn để xác nhận số điện thoại. Có áp dụng phí dữ liệu và phí tin nhắn tiêu chuẩn.
                                <span className='font-bold underline cursor-pointer'>Chính sách về quyền riêng tư</span></p>
                            <div className='form-group mt-4'>
                                <button type='submit' className='w-full py-2 rounded-md bg-gradient-to-r from-red-500 to-rose-600 hover:bg-gradient-to-l transition-all duration-500
                                text-white text-xl font-medium'>Đăng ký</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}
