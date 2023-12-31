import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleAuthProvider } from '../../../firebase.config';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AnimatePresence, motion } from 'framer-motion';
import './Login.css';
import GoogleIcon from '../../global/assets/icons8-google.svg';

export default function Login() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email!').required('Email is required!'),
        password: Yup.string().min(8, 'Password must be at least 8 characters!').required('Password is required!'),
    })

    const navigate = useNavigate();

    const handleSubmit = (values) => {
        try {
            signInWithEmailAndPassword(auth, values.email, values.password);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    async function signUpWithGoogle() {
        await signInWithPopup(auth, googleAuthProvider);
        navigate('/');
    }
    return (

        <section>
            <AnimatePresence mode="wait">
                <Formik initialValues={loginData} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    {() => (
                        <motion.div
                            layout
                            className="form-container"
                            initial={{ opacity: 0, x: '-5%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '5%' }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >

                            <h2>Continue to petpals, </h2>

                            <Form className="form">
                                <Field name="email" placeholder="Email" />
                                <div className="warning">
                                    <ErrorMessage name="email" />
                                </div>

                                <Field type="password" name="password" placeholder="Password" />
                                <div className="warning">
                                    <ErrorMessage name="password" />
                                </div>

                                <div className="submit">
                                    <button type="submit">Continue</button>
                                </div>

                                <div className="forgot-password">
                                    <Link to="/forgot-password">Forgot password?</Link>
                                </div>
                            </Form>

                            <div className="seperator">
                                <hr />
                                <span>or continue with</span>
                                <hr />
                            </div>

                            <div className="social">
                                <button className="google" onClick={signUpWithGoogle}>
                                    <img src={GoogleIcon} alt='Google' style={{ width: '1rem', height: '1rem', paddingRight: '1rem' }} /> Google
                                </button>
                            </div>

                            <div className="sign-up">
                                <p>Not a member yet? <Link to="/signup">Sign up</Link></p>
                            </div>

                        </motion.div>
                    )}
                </Formik>
            </AnimatePresence>
        </section>

    );
}