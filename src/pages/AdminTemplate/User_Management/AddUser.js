import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Form, DatePicker, Radio } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import *as Yup from 'yup';
import { EditFilled } from '@ant-design/icons';
import { addUser } from '../../../redux/actions/UserManagement';

export default function AddUser(props) {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            phone: '',
            birthday: '',
            gender: true,
            type: 'ADMIN',
            address: ''
        },
        onSubmit: values => dispatch(addUser(values, props.history)),
        validationSchema: Yup.object({
            name: Yup.string().required('*Ho ten khong de trong'),
            email: Yup.string().required('*Email khong de trong').email('Invalid Email'),
            password: Yup.string().required('*Mat khau khong de trong').min(5, 'Too short'),
            phone: Yup.string().required('*So dien thoai khong de trong'),
            birthday: Yup.string().required('*Ngay sinh chua chon'),
            address: Yup.string().required('*Dia chi khong de trong')
        })
    })
    const { handleSubmit, handleChange, setFieldValue, errors, touched } = formik

    return (
        <div>
            <div className='flex gap-4'>
                <p className='text-lg text-blue-800'><EditFilled /></p>
                <p className='mb-3 text-3xl text-blue-900 font-medium'>Them nguoi dung</p>
            </div>
            <div className='lg:-ml-24 mt-2'>
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
                        <input className='form-control' type='text' name='name' onChange={handleChange} />
                        {errors.name && touched.name && <p className='text-red-500'>{errors.name}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Email</span>}>
                        <input className='form-control' type='email' name='email' onChange={handleChange} />
                        {errors.email && touched.email && <p className='text-red-500'>{errors.email}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Mat khau</span>}>
                        <input type='password' className='form-control' name='password' onChange={handleChange} />
                        {errors.password && touched.password && <p className='text-red-500'>{errors.password}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>So dien thoai</span>}>
                        <input className='form-control' type='number' name='phone' onChange={handleChange} />
                        {errors.phone && touched.phone && <p className='text-red-500'>{errors.phone}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Ngay sinh</span>}>
                        <DatePicker format='DD-MM-YYYY' name="birthday" onChange={(value) => setFieldValue('birthday', moment(value).format('YYYY-MM-DD'))} />
                        {errors.birthday && touched.birthday && <p className='text-red-500'>{errors.birthday}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Gioi tinh</span>}>
                        <Radio.Group name="radiogroup" defaultValue={true} onChange={e => setFieldValue('gender', e.target.value)}>
                            <Radio value={true}>Nam</Radio>
                            <Radio value={false}>Nu</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Dia chi</span>}>
                        <input className='form-control' type='text' name='address' onChange={handleChange} />
                        {errors.address && touched.address && <p className='text-red-500'>{errors.address}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Tac vu</span>}>
                        <button type='submit' className='btn btn-success'> Them nguoi dung</button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    )
}
