import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import *as Yup from 'yup'
import { Form, Input, Button, InputNumber, Switch } from 'antd';
import { IoIosBed } from 'react-icons/io'
import { createRoom } from '../../../redux/actions/RoomDetail';

export default function CreateRoom(props) {
    const { locationId } = props.match.params

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            guests: '',
            bedRoom: '',
            bath: '',
            description: '',
            price: '',
            elevator: false,
            hotTub: false,
            pool: false,
            indoorFireplace: false,
            dryer: false,
            gym: false,
            kitchen: false,
            wifi: false,
            heating: false,
            cableTV: false,
            locationId: locationId
        },
        onSubmit: values => dispatch(createRoom(values, props.history)),
        validationSchema: Yup.object({
            name: Yup.string().required('*Ten phong khong de trong'),
            guests: Yup.string().required('*So khach chua chon'),
            bedRoom: Yup.string().required('*So giuong ngu chua chon'),
            bath: Yup.string().required('*So phong tam chua chon'),
            price: Yup.string().required('*Gia phong chua chon'),
            description: Yup.string().required('*Chua danh gia phong')
        })
    })
    const { handleChange, handleSubmit, setFieldValue, errors, touched } = formik



    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <div>
            <div className='flex items-baseline gap-3 mb-4'>
                <IoIosBed className='text-2xl text-blue-900' />
                <span className='text-3xl text-blue-900 font-semibold'>Add Room</span>
            </div>

            <div className='-ml-32'>
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

                    <Form.Item label={<span className='font-medium'>Ten phong</span>}>
                        <Input name='name' onChange={handleChange} />
                        {errors.name && touched.name && <p className='text-danger'>{errors.name}</p>}
                    </Form.Item>

                    <div style={{ marginLeft: '13.6rem' }} className='grid grid-cols-6 items-center'>
                        <div className='flex items-center gap-2'>
                            <label className='font-medium'>So khach:</label>
                            <InputNumber min='0' name='guests' onChange={value => setFieldValue('guests', value)} />
                        </div>

                        <div className='flex items-center gap-2'>
                            <label className='font-medium'>So giuong ngu:</label>
                            <InputNumber min='0' name='bedRoom' onChange={value => setFieldValue('bedRoom', value)} />
                        </div>
                        <div className='flex items-center gap-2'>
                            <label className='font-medium'>So phong tam:</label>
                            <InputNumber min='0' name='bath' onChange={value => setFieldValue('bath', value)} />
                        </div>
                    </div>
                    <div className='ml-72 flex items-center'>
                        {errors.guests && touched.guests && <span className='text-danger'>{errors.guests}</span>}
                        {errors.bedRoom && touched.bedRoom && <span className='text-danger ml-36'>{errors.bedRoom}</span>}
                        {errors.bath && touched.bath && <span className='text-danger ml-20'>{errors.bath}</span>}
                    </div>

                    <Form.Item style={{ marginTop: '2rem' }} label={<span className='font-medium'>Gia phong</span>}>
                        <InputNumber style={{ width: '7rem' }} min='0' name='price' onChange={value => setFieldValue('price', value)} />
                        {errors.price && touched.price && <p className='text-danger'>{errors.price}</p>}
                    </Form.Item>

                    <div className='flex mb-8 gap-32'>
                        <div style={{ marginLeft: '9.3rem' }} className='flex'>
                            <div className="flex flex-col gap-3 mr-2">
                                <label className='text-right font-medium'>Thang may:</label>
                                <label className='text-right font-medium'>Bon tam nuoc nong:</label>
                                <label className='text-right font-medium'>Ho boi:</label>
                                <label className='text-right font-medium'>Binh chua chay:</label>
                            </div>
                            <div className="flex flex-col gap-5">
                                <Switch name='elevator' onChange={value => setFieldValue('elevator', value)} />
                                <Switch name='hotTub' onChange={value => setFieldValue('hotTub', value)} />
                                <Switch name='pool' onChange={value => setFieldValue('pool', value)} />
                                <Switch name='indoorFireplace' onChange={value => setFieldValue('indoorFireplace', value)} />
                            </div>
                        </div>

                        <div className='flex'>
                            <div className="flex flex-col gap-3 mr-2">
                                <label className='text-right font-medium'>May giat say:</label>
                                <label className='text-right font-medium'>Phong gym</label>
                                <label className='text-right font-medium'>Nha bep</label>
                                <label className='text-right font-medium'>Wifi</label>
                            </div>
                            <div className="flex flex-col gap-5">
                                <Switch name='dryer' onChange={value => setFieldValue('dryer', value)} />
                                <Switch name='gym' onChange={value => setFieldValue('gym', value)} />
                                <Switch name='kitchen' onChange={value => setFieldValue('kitchen', value)} />
                                <Switch name='wifi' onChange={value => setFieldValue('wifi', value)} />
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <div className="flex flex-col gap-3">
                                <label className='text-right font-medium'>Nuoc nong</label>
                                <label className='text-right font-medium'>Ti vi cap</label>
                            </div>
                            <div className="flex flex-col gap-5">
                                <Switch name='heating' onChange={value => setFieldValue('heating', value)} />
                                <Switch name='cableTV' onChange={value => setFieldValue('cableTV', value)} />
                            </div>
                        </div>
                    </div>

                    <Form.Item label={<span className='font-medium'>Danh gia</span>}>
                        <Input.TextArea name='description' rows={4} onChange={handleChange} />
                        {errors.description && touched.description && <p className='text-danger'>{errors.description}</p>}
                    </Form.Item>

                    <Form.Item label={<span className='font-medium'>Tac vu</span>}>
                        <button type='submit' className='btn btn-success' >Tao them phong</button>
                    </Form.Item>
                </Form>
            </div >
        </div >
    )
}
