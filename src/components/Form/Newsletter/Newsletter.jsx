import {Formik}from 'formik'
import { schemaFromNewsletter } from '../../../schema/schema'
import { FormNewsletter, Input } from './Newsletter.styled'

export const Newsletter = () => {

    const handleSubmit = ({email},{resetForm}) => {
        
    }
    return (
        <Formik
            initialValues={{ email: '' }}
            onSubmit={handleSubmit}
        validationSchema={schemaFromNewsletter}>
            <FormNewsletter>
                <p>Newsletter</p>
                <Input type='email' name='email'
                placeholder='email@com.ua'/>
            </FormNewsletter>
        </Formik>
    )
}