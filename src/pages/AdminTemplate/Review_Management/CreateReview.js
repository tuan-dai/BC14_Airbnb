import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createReview } from '../../../redux/actions/Review'
import { useFormik } from 'formik'
import *as Yup from 'yup'


export default function CreateReview(props) {
    const { roomId } = props
    const myRef = useRef(null)
    const closeRef = useRef(null)

    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            content: ''
        },
        onSubmit: values => dispatch(createReview(roomId, values)),
        validationSchema: Yup.object({
            content: Yup.string().required('*Content is required')
        })
    })
    const { handleChange, handleSubmit, errors, touched, dirty } = formik

    return (
        <form onSubmit={handleSubmit} ref={myRef}>
            <div className="modal fade" id="modalCreateReview" tabIndex={-1} role="dialog" aria-labelledby="modalCreateReview" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalCreateReviewTitle">Add Review</h5>
                            <button ref={closeRef} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="px-3 pt-3">
                            <textarea type='text' rows="4" cols="50" name='content'
                                className='border-b w-full focus:border-black focus:outline-none'
                                onChange={handleChange} />
                            {errors.content && touched.content && <p className='text-danger'>{errors.content}</p>}
                        </div>
                        <div className="flex justify-end gap-3 p-3">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary" disabled={!dirty && errors}
                                onClick={() => {
                                    closeRef.current.click()
                                    myRef.current.reset()
                                }}
                            >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
