import * as yup from 'yup'

export const schemaFromNewsletter = yup.object().shape({
    email: yup.string().email().required(),
})