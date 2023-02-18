import { Formik, Form, Field } from "formik"

export const Main = () => {
    const handleSubmit = ({search },{resetForm}) => {
        console.log(search)
    resetForm()
    }
    return (
        <>
            <div>
                <div>
                    <ul>
                    
                    </ul>
                </div>
                <div>
                    <h3>Search</h3>
                    <Formik
                        initialValues={{ search: '' }}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <Field type='text'
                                name='search'
                            placeholder='Search...'/>
                            <button>
                                click
                            </button>
                        </Form>
                    </Formik>
                    <p>Categories</p>
                    <ul>
                        <li>Criminal Law</li>
                        <li>Family Law</li>
                        <li>
                            Delivery
                        </li>
                        <li>
                            Finansical Law
                        </li>
                        <li>Law Service</li>
                    </ul>
                </div>
        </div>
        </>
    )
}