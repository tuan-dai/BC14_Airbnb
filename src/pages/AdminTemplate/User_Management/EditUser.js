import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, DatePicker, Radio } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import *as Yup from 'yup';
import { EditFilled } from '@ant-design/icons';

import { addUser, updateUser } from '../../../redux/actions/UserManagement';
import { getUserInfo } from '../../../redux/actions/UserInfo';

export default function EditUser(props) {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const dispatch = useDispatch()
    const { id } = props.match.params

    useEffect(() => {
        dispatch(getUserInfo(id))
    }, [])

    const { userInfo } = useSelector(state => state.UserInfo_Reducer)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: userInfo?.name,
            email: userInfo?.email,
            password: userInfo?.password,
            phone: userInfo?.phone,
            birthday: userInfo?.birthday,
            gender: userInfo?.gender,
            type: userInfo?.type,
            address: userInfo?.address
        },
        onSubmit: values => dispatch(updateUser(id, values, props.history)),
        validationSchema: Yup.object({
            name: Yup.string().required('*Ho ten khong de trong'),
            email: Yup.string().required('*Email khong de trong').email('Invalid Email'),
            password: Yup.string().required('*Mat khau khong de trong').min(5, 'Too short'),
            phone: Yup.string().required('*So dien thoai khong de trong'),
            birthday: Yup.string().required('*Ngay sinh chua chon'),
            address: Yup.string().required('*Dia chi khong de trong')
        })
    })
    const { handleSubmit, handleChange, setFieldValue, errors, touched, values } = formik

    return (
        <div>
            <div className='flex gap-4'>
                <p className='text-lg text-blue-800'><EditFilled /></p>
                <p className='mb-3 text-3xl text-blue-900 font-medium'>Cap nhat nguoi dung</p>
            </div>
            <div className='-ml-24 mt-2'>
                <Form
                    onSubmitCapture={handleSubmit}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    initialValues={{
                        size: componentSize,
                    }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                >
                    <Form.Item label={<span className='font-medium'>Ho ten</span>}>
                        <input className='form-control' type='text' name='name' value={values.name} onChange={handleChange} />
                        {errors.name && touched.name && <p className='text-red-500'>{errors.name}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Email</span>}>
                        <input className='form-control' type='email' name='email' value={values.email} onChange={handleChange} />
                        {errors.email && touched.email && <p className='text-red-500'>{errors.email}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Mat khau</span>}>
                        <input type='password' className='form-control' name='password' value={values.password} disabled={true} onChange={handleChange} />
                        {errors.password && touched.password && <p className='text-red-500'>{errors.password}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>So dien thoai</span>}>
                        <input className='form-control' type='number' name='phone' value={values.phone} onChange={handleChange} />
                        {errors.phone && touched.phone && <p className='text-red-500'>{errors.phone}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Ngay sinh</span>}>
                        <DatePicker format='DD-MM-YYYY' name="birthday" value={moment(values.birthday)} onChange={(value) => setFieldValue('birthday', moment(value).format('YYYY-MM-DD'))} />
                        {errors.birthday && touched.birthday && <p className='text-red-500'>{errors.birthday}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Gioi tinh</span>}>
                        <Radio.Group name="radiogroup" value={values.gender} onChange={e => setFieldValue('gender', e.target.value)}>
                            <Radio value={true}>Nam</Radio>
                            <Radio value={false}>Nu</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Dia chi</span>}>
                        <input className='form-control' type='text' name='address' value={values.address} onChange={handleChange} />
                        {errors.address && touched.address && <p className='text-red-500'>{errors.address}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Tac vu</span>}>
                        <button type='submit' className='btn btn-success'>Cap nhat</button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}
