import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, InputNumber } from 'antd';
import { useFormik } from 'formik';
import *as Yup from 'yup'

import { getLocationDetail } from '../../../redux/actions/LocationDetail'
import { updateLocation } from '../../../redux/actions/Location';

export default function UpdateLocation(props) {
    const { locationId } = props.match.params
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getLocationDetail(locationId))
    }, [])
    const { location } = useSelector(state => state.LocationDetail_Reducer)

    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: location?.name,
            province: location?.province,
            country: location?.country,
            valueate: location?.valueate
        },
        onSubmit: values => dispatch(updateLocation(locationId, values, props.history)),
        validationSchema: Yup.object({
            name: Yup.string().required('Dia diem khong de trong'),
            province: Yup.string().required('Tinh/thanh khong de trong'),
            country: Yup.string().required('Quoc gia khong de trong'),
            valueate: Yup.string().required('Danh gia khong de trong')
        })
    })

    const { handleChange, handleSubmit, setFieldValue, errors, touched, values } = formik

    return (
        <section>
            <div className='flex items-center gap-3 mb-4'>
                <i className="fa fa-map-marker-alt text-xl text-blue-900"></i>
                <span className='text-3xl text-blue-900 font-medium'>Cap nhat vi tri</span>
            </div>

            <div className='-ml-24 mt-2'>
                <Form onSubmitCapture={handleSubmit}
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    initialValues={{
                        size: componentSize,
                    }}
                    onValuesChange={onFormLayoutChange}
                    size={componentSize}
                >
                    <Form.Item label={<span className='font-medium'>*Dia diem</span>}>
                        <Input name='name' value={values.name} onChange={handleChange} />
                        {errors.name && touched.name && <p className='text-danger'>{errors.name}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Tinh/Thanh</span>}>
                        <Input name='province' value={values.province} onChange={handleChange} />
                        {errors.province && touched.province && <p className='text-danger'>{errors.province}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Quoc gia</span>}>
                        <Input name='country' value={values.country} onChange={handleChange} />
                        {errors.country && touched.country && <p className='text-danger'>{errors.country}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Danh gia</span>} >
                        <InputNumber name='valueate' value={values.valueate} min='0' onChange={value => setFieldValue('valueate', value)} />
                        {errors.valueate && touched.valueate && <p className='text-danger'>{errors.valueate}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Tac vu</span>}>
                        <button type="submit" className='btn btn-success'>
                            Cap nhat
                        </button>
                    </Form.Item>

                </Form>
            </div>
        </section>
    )
}
