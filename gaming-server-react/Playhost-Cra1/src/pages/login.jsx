import React, { useEffect, useState, useRef } from 'react';

import { Helmet } from 'react-helmet-async';
import { Parallax } from "react-parallax";
import { Link } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Preloader from '../layout/preloader';
import Footer from '../section-pages/footer';
import ScrollToTopBtn from '../layout/ScrollToTop';
import { createGlobalStyle } from 'styled-components';

////////////////////////
import { useNavigate } from 'react-router-dom';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.service";

const image1 ="./img/background/2.webp";

const GlobalStyles = createGlobalStyle`
  .react-parallax-bgimage {
    transform: translate3d(-50%, 0, 0px) !important;
  }
  .h-100{
    height: 100vh !important;
  }
`;

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Home = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
      const username = e.target.value;
      setUsername(username);
  };

  const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
  };

  const handleLogin = (e) => {
      e.preventDefault();

      setMessage("");
      setLoading(true);

      form.current.validateAll();

      if (checkBtn.current.context._errors.length === 0) {
          AuthService.login(username, password).then(
              () => {
                  navigate("/");
                  window.location.reload();
              },
              (error) => {
                  const resMessage =
                      (error.response &&
                          error.response.data &&
                          error.response.data.message) ||
                      error.message ||
                      error.toString();

                  setLoading(false);
                  setMessage(resMessage);
              }
          );
      } else {
          setLoading(false);
      }
  };

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

  return (
    <>
    {/* HEAD */}
    <Helmet>
      <link rel="icon" href="./img/icon.png" />
      <title>Critter Hosting.game</title>
    </Helmet>

    <GlobalStyles/>

    {/* LOADER */}
    <div id='mainpreloader'>
      <Preloader/>
    </div>

    {/* MENU */}
    <div className="home dark-scheme">
      <header id="header-wrap">
         <Navbar />
      </header>

      {/* section */}
      <Parallax className="" bgImage={image1} strength={5}>  
                <div className="de-gradient-edge-top"></div>
                <div className="de-gradient-edge-bottom"></div>
        <section className="no-bg h-100">
          <div className="container z-9">
              <div className="row align-items-center">
                <div className="col-lg-4 offset-lg-4">
                    <div className="padding40 rounded-10 shadow-soft bg-dark-1" id="login">
                        <div className="text-center">
                            <h4>Sign in to your account</h4>
                        </div>

                        <div className="text-center">
                            <h4>Login</h4>
                        </div>
                        <div className="spacer-10"></div>
                        <Form onSubmit={handleLogin} ref={form}>
                            <div className="field-set">
                                <label>Username or email</label>
                                <Input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    value={username}
                                    onChange={onChangeUsername}
                                    validations={[required]}
                                />
                            </div>
                            <div className="field-set">
                                <label>Password</label>
                                <Input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required]}
                                />
                            </div>
                            <CheckButton style={{ display: "none" }} ref={checkBtn} />
                            <div className="spacer-20"></div>
                            <button className="btn btn-primary btn-block" disabled={loading}>
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                <span>Login</span>
                            </button>

                            {message && (
                                <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {message}
                                    </div>
                                </div>
                            )}
                        </Form>
                        <div className="title-line">Or&nbsp;login&nbsp;up&nbsp;with</div>
                        <div className="row g-2">
                            <div className="col-lg-6">
                                <Link className="btn-sc btn-fullwidth mb10" to="/"><img src="./img/svg/google_icon.svg" alt=""/>Google</Link>
                            </div>
                            <div className="col-lg-6">
                                <Link className="btn-sc btn-fullwidth mb10" to="/"><img src="./img/svg/facebook_icon.svg" alt=""/>Facebook</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
      </Parallax>

      {/* footer */}
      <Footer/>


    </div>
    <ScrollToTopBtn />
    </>
  )
}

export default Home;