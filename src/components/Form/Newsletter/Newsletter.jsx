import { Formik }from 'formik'
import { schemaFromNewsletter } from '../../../schema/schema'
import { BiSend } from 'react-icons/bi'
import { FormNewsletter, Input, Button, TitleNewsletter } from './Newsletter.styled'

export const Newsletter = () => {

    const handleSubmit = ({ email }, { resetForm }) => {
        console.log(email)
        console.log('hi')
        resetForm()
    }
    return (
        <Formik
            initialValues={{ email: '' }}
            onSubmit={handleSubmit}
        validationSchema={schemaFromNewsletter}>
            <FormNewsletter>
                <TitleNewsletter>
                    Newsletter
                </TitleNewsletter>
                <Input type='email' name='email'
                placeholder='email@com.ua'/>
                <Button type="submit"><BiSend style={{
                    fill: 'black',
                    stroke:'black',
                    // width: '100%', height: '100%'
                }}
                /></Button>
            </FormNewsletter>
            
        </Formik>
    )
}