import React, {useEffect, CompouseState, useRef, useState} from 'react';
import {Helmet} from 'react-helmet-async';
import {Parallax} from "react-parallax";
import {Link} from "react-router-dom";
import Navbar from '../layout/Navbar';
import Preloader from '../layout/preloader';
import Footer from '../section-pages/footer';
import ScrollToTopBtn from '../layout/ScrollToTop';
import {createGlobalStyle} from 'styled-components';

//////////////////
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";

import AuthService from "../services/auth.service";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};
////////////////////////////////

const image1 = "./img/background/5.webp";

const GlobalStyles = createGlobalStyle`
    .react-parallax-bgimage {
        transform: translate3d(-50%, 0, 0px) !important;
    }
`;

const Home = () => {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loader = document.getElementById('mainpreloader');
            if (loader)
                setTimeout(() => {
                    loader.classList.add("fadeOut");
                    loader.style.display = 'none';
                }, 600)
        }
    }, []);

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(username, email, password).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        }
    };

    return (
        <>
            {/* HEAD */}
            <Helmet>
                <link rel="icon" href="./img/icon.png"/>
                <title>Playhost - Game Hosting Website Template</title>
            </Helmet>

            <GlobalStyles/>

            {/* LOADER */}
            <div id='mainpreloader'>
                <Preloader/>
            </div>

            {/* MENU */}
            <div className="home dark-scheme">
                <header id="header-wrap">
                    <Navbar/>
                </header>

                {/* section */}
                <Parallax className="" bgImage={image1} strength={5}>
                    <div className="de-gradient-edge-top"></div>
                    <div className="de-gradient-edge-bottom"></div>
                    <section className="no-bg">
                        <div className="container z-9">
                            <div className="row align-items-center">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="p-5 rounded-10 shadow-soft bg-dark-1" id="login">
                                        <h4>Don&apos;t have an account? Register now.</h4>
                                        <p>Welcome to Farts. We&apos;re excited to have you on board. By creating an
                                            account with us, you&apos;ll gain access to a range of benefits and
                                            convenient features that will enhance your car rental experience.</p>
                                        <Form onSubmit={handleRegister} ref={form}>
                                            {!successful && (
                                                <div className="row">

                                                    <div className="col-md-6">
                                                        <div className="field-set">
                                                            <label>Name:</label>
                                                            <input type='text' name='name' id='name'
                                                                   className="form-control"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="field-set">
                                                            <label>Email Address:</label>
                                                            <Input
                                                                type="text"
                                                                className="form-control"
                                                                name="email"
                                                                value={email}
                                                                onChange={onChangeEmail}
                                                                validations={[required, validEmail]}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="field-set">
                                                            <label>Choose a Username:</label>
                                                            <Input
                                                                type="text"
                                                                className="form-control"
                                                                name="username"
                                                                value={username}
                                                                onChange={onChangeUsername}
                                                                validations={[required, vusername]}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/*<div className="col-md-6">
                                                        <div className="field-set">
                                                            <label>Phone:</label>
                                                            <input type='text' name='phone' id='phone'
                                                                   className="form-control"/>
                                                        </div>
                                                    </div>*/}

                                                    <div className="col-md-6">
                                                        <div className="field-set">
                                                            <label>Password:</label>
                                                            <Input
                                                                type="password"
                                                                className="form-control"
                                                                name="password"
                                                                value={password}
                                                                onChange={onChangePassword}
                                                                validations={[required, vpassword]}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-md-6">
                                                        <div className="field-set">
                                                            <label>Re-enter Password:</label>
                                                            <input type='text' name='re-password' id='re-password'
                                                                   className="form-control"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 offset-lg-3 text-center my-3">
                                                        <div id='submit'>
                                                            <input type='submit' id='send_message' value='Register Now'
                                                                   className="btn-main color-2"/>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 offset-lg-3">
                                                        <div className="title-line">Or&nbsp;sign&nbsp;up&nbsp;with</div>
                                                        <div className="row g-2">
                                                            <div className="col-lg-6">
                                                                <Link className="btn-sc btn-fullwidth mb10" to="/"><img
                                                                    src="./img/svg/google_icon.svg"
                                                                    alt=""/>Google</Link>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <Link className="btn-sc btn-fullwidth mb10" to="/"><img
                                                                    src="./img/svg/facebook_icon.svg"
                                                                    alt=""/>Facebook</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                    )}

                                                    {message && (
                                                        <div className="form-group">
                                                            <div
                                                                className={successful ? "alert alert-success" : "alert alert-danger"}
                                                                role="alert"
                                                            >
                                                                {message}
                                                            </div>
                                                        </div>
                                                    )}
                                                    <CheckButton style={{display: "none"}} ref={checkBtn}/>

                                                </Form>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                </section>
                                                </Parallax>

                                            {/* footer */}
                                            <Footer/>


                                    </div>
                                    <ScrollToTopBtn/>
                                </>
                                );
                                };

export default Home;
