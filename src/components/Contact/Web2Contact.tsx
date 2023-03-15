import * as emailjs from 'emailjs-com'
import { Formik, Form, Field } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

export default function ContactUsWeb2() {
  const SERVICE_ID = 'service_6lpzf9l'
  const TEMPLATE_ID = 'template_vply2ov'
  const PUBLIC_KEY = 'EJvvFrwmNXx7BKeDv'
  const [message, setMessage] = useState('')
  function Submit(values: any, { setSubmitting }: { setSubmitting: any }) {
    setMessage('load')
    var data = {
      from_name: values.email,
      message: `phone:${values.phone} /n company:${values.company} /n message:${values.message}`,
      reply_to: values.email
    }
    try {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY).then(
        function () {
          // console.log(response.status, response.text)
          setSubmitting(false)
          setMessage('success')
          setTimeout(() => {
            setMessage('')
          }, 2000)
          // router.push('/')
        },
        function () {
          setSubmitting(false)
          setMessage('error')
          setTimeout(() => {
            setMessage('')
          }, 2000)
        }
      )
    } catch (error) {
      setMessage('error')
      setTimeout(() => {
        setMessage('')
      }, 2000)
    }
  }

  return (
    <div className="relative bg-background my-2">
      <div className="relative py-16 px-4 sm:pb-24 sm:pt-10 sm:px-6 ">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg ">
            <h2 className="text-3xl text-primary font-extrabold tracking-tight sm:text-4xl">
              Let's work together
            </h2>
            <p className="mt-4 text-lg text-primary sm:mt-3">
              We’d love to hear from you! Send us a message using the form
              opposite, or email us.
            </p>
            <Formik
              initialValues={{
                first_name: '',
                last_name: '',
                email: '',
                company: '',
                phone: '',
                message: ''
              }}
              validationSchema={Yup.object().shape({
                first_name: Yup.string().required('Required'),
                last_name: Yup.string().required('Required'),
                email: Yup.string().email('Invalid email').required('Required'),
                company: Yup.string(),
                phone: Yup.string().matches(
                  /^(\+?\d{1,3}[- ]?)?\d{10}$/,
                  'Phone number must be in a valid format'
                ),
                message: Yup.string()
                  .max(500, 'Max. 500 characters')
                  .required('Required')
              })}
              onSubmit={Submit}
            >
              {({ errors, touched, handleSubmit }) => (
                <Form className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-primary"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="first_name"
                        id="first-name"
                        autoComplete="given-name"
                        className={
                          'block p-2 ' +
                          (errors.first_name && touched.first_name
                            ? 'border-red-500'
                            : 'border-border') +
                          ' text-primary bg-background w-full shadow-sm sm:text-sm  border border-border rounded-md'
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-primary"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="last_name"
                        id="first-name"
                        autoComplete="given-name"
                        className={
                          'block p-2 ' +
                          (errors.last_name && touched.last_name
                            ? 'border-red-500'
                            : 'border-border') +
                          ' text-primary bg-background w-full shadow-sm sm:text-sm  border border-border rounded-md'
                        }
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-primary"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="email"
                        id="first-name"
                        autoComplete="given-name"
                        className={
                          'block p-2 ' +
                          (errors.email && touched.email
                            ? 'border-red-500'
                            : 'border-border') +
                          ' text-primary bg-background w-full shadow-sm sm:text-sm  border border-border rounded-md'
                        }
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-primary"
                      >
                        Company
                      </label>
                      <span
                        id="phone-description"
                        className="text-sm text-primary-light"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <Field
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="given-name"
                        className={
                          'block ' +
                          (errors.company && touched.company
                            ? 'border-red-500'
                            : 'border-border') +
                          ' text-primary p-2 bg-background w-full shadow-sm sm:text-sm  border border-border rounded-md'
                        }
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-primary"
                      >
                        Phone
                      </label>
                      <span
                        id="phone-description"
                        className="text-sm text-primary-light"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <Field
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="phone"
                        className={
                          'block p-2 ' +
                          (errors.phone && touched.phone
                            ? 'border-red-500'
                            : 'border-border') +
                          ' text-primary bg-background w-full shadow-sm sm:text-sm  border border-border rounded-md'
                        }
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-primary"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <Field
                        id="message"
                        name="message"
                        aria-describedby="message-description"
                        as="textarea"
                        rows={4}
                        className={
                          'block p-2 w-full text-primary bg-background shadow-sm sm:text-sm border ' +
                          (errors.message && touched.message
                            ? 'border-red-500'
                            : 'border-border') +
                          ' rounded-md'
                        }
                      />
                    </div>
                  </div>
                  <div className="float-right">
                    <button
                      // disabled={!!errors && !!touched}
                      onClick={() => handleSubmit()}
                      className={` ${
                        message == 'load'
                          ? 'char1'
                          : message == 'success'
                          ? 'border border-green-600'
                          : message == 'success'
                          ? 'border border-red-600'
                          : 'border border-transparent'
                      } py-2 px-4 disabled:cursor-not-allowed  shadow-sm text-sm font-medium rounded-md text-background bg-primary hover:bg-primary `}
                    >
                      {message == 'load'
                        ? 'Loading...'
                        : message == 'success'
                        ? 'Message Send Successfully'
                        : message == 'success'
                        ? 'Error'
                        : 'Submit'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  )
}
