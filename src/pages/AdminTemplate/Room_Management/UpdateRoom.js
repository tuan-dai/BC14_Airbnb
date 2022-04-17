import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import *as Yup from 'yup'
import { Form, Input, Button, InputNumber, Switch } from 'antd';
import { getRoomDetail, updateRoom } from '../../../redux/actions/RoomDetail';


export default function UpdateRoom(props) {
    const { roomId } = props.match.params

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRoomDetail(roomId))
    }, [])
    const { room } = useSelector(state => state.RoomDetail_Reducer)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: room?.name,
            guests: room?.guests,
            bedRoom: room?.bedRoom,
            bath: room?.bath,
            description: room?.description,
            price: room?.price,
            elevator: room?.elevator,
            hotTub: room?.hotTub,
            pool: room?.pool,
            indoorFireplace: room?.indoorFireplace,
            dryer: room?.dryer,
            gym: room?.gym,
            kitchen: room?.kitchen,
            wifi: room?.wifi,
            heating: room?.heating,
            cableTV: room?.cableTV,
            locationId: room?._id
        },
        onSubmit: values => dispatch(updateRoom(roomId, values, props.history)),
        validationSchema: Yup.object({
            name: Yup.string().required('Ten phong khong de trong'),
            guests: Yup.string().required('So khach chua chon'),
            bedRoom: Yup.string().required('So giuong ngu chua chon'),
            bath: Yup.string().required('So phong tam chua chon'),
            price: Yup.string().required('Gia phong chua chon'),
            description: Yup.string().required('Chua danh gia phong')
        })
    })
    const { handleChange, handleSubmit, setFieldValue, errors, touched, values } = formik



    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <div>
            <div className='flex items-center gap-3 mb-4'>
                <i className="fa fa-bed text-xl text-blue-900"></i>
                <span className='text-3xl text-blue-900 font-bold'>Cap nhat phong</span>
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

                    <Form.Item label="Ten phong">
                        <Input name='name' value={values.name} onChange={handleChange} />
                        {errors.name && touched.name && <p className='text-danger'>{errors.name}</p>}
                    </Form.Item>

                    <div style={{ marginLeft: '13.6rem' }} className='grid grid-cols-6 items-center'>
                        <div className='flex items-center gap-2'>
                            <label>So khach:</label>
                            <InputNumber min='0' name='guests' value={values.guests} onChange={value => setFieldValue('guests', value)} />
                        </div>

                        <div className='flex items-center gap-2'>
                            <label>So giuong ngu:</label>
                            <InputNumber min='0' name='bedRoom' value={values.bedRoom} onChange={value => setFieldValue('bedRoom', value)} />
                        </div>
                        <div className='flex items-center gap-2'>
                            <label>So phong tam:</label>
                            <InputNumber min='0' name='bath' value={values.bath} onChange={value => setFieldValue('bath', value)} />
                        </div>
                    </div>
                    <div className='ml-72 flex items-center'>
                        {errors.guests && touched.guests && <span className='text-danger'>{errors.guests}</span>}
                        {errors.bedRoom && touched.bedRoom && <span className='text-danger ml-40'>{errors.bedRoom}</span>}
                        {errors.bath && touched.bath && <span className='text-danger ml-20'>{errors.bath}</span>}
                    </div>

                    <Form.Item style={{ marginTop: '2rem' }} label="Gia phong">
                        <InputNumber style={{ width: '7rem' }} min='0' name='price' value={values.price} onChange={value => setFieldValue('price', value)} />
                        {errors.price && touched.price && <p className='text-danger'>{errors.price}</p>}
                    </Form.Item>

                    <div className='flex mb-8 gap-32'>
                        <div style={{ marginLeft: '9.3rem' }} className='flex'>
                            <div className="flex flex-col gap-3 mr-2">
                                <label className='text-right'>Thang may:</label>
                                <label className='text-right'>Bon tam nuoc nong:</label>
                                <label className='text-right'>Ho boi:</label>
                                <label className='text-right'>Binh chua chay:</label>
                            </div>
                            <div className="flex flex-col gap-5">
                                <Switch name='elevator' checked={values.elevator} onChange={value => setFieldValue('elevator', value)} />
                                <Switch name='hotTub' checked={values.hotTub} onChange={value => setFieldValue('hotTub', value)} />
                                <Switch name='pool' checked={values.pool} onChange={value => setFieldValue('pool', value)} />
                                <Switch name='indoorFireplace' checked={values.indoorFireplace} onChange={value => setFieldValue('indoorFireplace', value)} />
                            </div>
                        </div>

                        <div className='flex'>
                            <div className="flex flex-col gap-3 mr-2">
                                <label className='text-right'>May giat say:</label>
                                <label className='text-right'>Phong gym</label>
                                <label className='text-right'>Nha bep</label>
                                <label className='text-right'>Wifi</label>
                            </div>
                            <div className="flex flex-col gap-5">
                                <Switch name='dryer' checked={values.dryer} onChange={value => setFieldValue('dryer', value)} />
                                <Switch name='gym' checked={values.gym} onChange={value => setFieldValue('gym', value)} />
                                <Switch name='kitchen' checked={values.kitchen} onChange={value => setFieldValue('kitchen', value)} />
                                <Switch name='wifi' checked={values.wifi} onChange={value => setFieldValue('wifi', value)} />
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <div className="flex flex-col gap-3">
                                <label className='text-right'>Nuoc nong</label>
                                <label className='text-right'>Ti vi cap</label>
                            </div>
                            <div className="flex flex-col gap-5">
                                <Switch name='heating' checked={values.heating} onChange={value => setFieldValue('heating', value)} />
                                <Switch name='cableTV' checked={values.cableTV} onChange={value => setFieldValue('cableTV', value)} />
                            </div>
                        </div>
                    </div>

                    <Form.Item label="Danh gia">
                        <Input.TextArea name='description' value={values.description} onChange={handleChange} />
                        {errors.description && touched.description && <p className='text-danger'>{errors.description}</p>}
                    </Form.Item>

                    <Form.Item label="Tac vu">
                        <Button type='primary' htmlType='submit' >Cap nhat phong</Button>
                    </Form.Item>
                </Form>
            </div >
        </div >
    )
}
