import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateReview } from '../../../redux/actions/Review'
import { useFormik } from 'formik'
import *as Yup from 'yup'


export default function UpdateReview(props) {
    const { reviewDetail } = props
    console.log(reviewDetail)
    const closeRef = useRef(null)

    const dispatch = useDispatch()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            content: reviewDetail?.content
        },
        onSubmit: values => dispatch(updateReview(reviewDetail?._id, values, reviewDetail?.roomId?._id)),
        validationSchema: Yup.object({
            content: Yup.string().required('*Content is required')
        })
    })
    const { handleChange, handleSubmit, values, errors, touched } = formik

    return (
        <form onSubmit={handleSubmit}>
            <div className="modal fade" id="modalUpdateReview" tabIndex={-1} role="dialog" aria-labelledby="modalUpdateReview" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="modalUpdateReviewTitle">Update Review</h5>
                            <button ref={closeRef} type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="px-3 pt-3">
                            <textarea type='text' rows="4" cols="50" name='content' value={values.content}
                                className='border-b w-full focus:border-black focus:outline-none'
                                onChange={handleChange} />
                            {errors.content && touched.content && <p className='text-danger'>{errors.content}</p>}
                        </div>
                        <div className="flex justify-end gap-3 p-3">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-primary"
                                onClick={() => closeRef.current.click()}
                            >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

// dispatch(updateReview(reviewDetail?._id, values))