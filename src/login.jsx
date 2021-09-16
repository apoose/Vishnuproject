import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Footer from './footer';
import $, { event } from "jquery";
import Firebase from 'firebase';
import config from "./config.js";
class login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            useremail: '',
            password: ''

        }
        this.handleLogin = this.handleLogin.bind(this)
    }
     handleLogin = async (e)  => {
        
        e.preventDefault();
        window.location.href = "/profile"
        // if (!this.state.useremail) {
        //     $("#errorMsg").text("Please enter email");
        // }
        // else if (!this.state.password) {
        //     $("#errorMsg").text("Please enter password");
        // }
        // else {
        //     let useremail = this.state.useremail;
        //     let password = this.state.password;
        //     localStorage.setItem('useremail', useremail)
        //     localStorage.setItem('password', password)
        //     const ref = Firebase
        //     .firestore()
        //     .collection("user123");
        //     const data = await ref.get();

        //     data.forEach(doc => {
        //         console.log(doc.id, '=>', doc.data());
        //         this.setState({
        //             userData : doc.data().postDetails[0],
        //             useremail:doc.data().postDetails[0].useremail,
        //             Mobile:doc.data().postDetails[0].Mobile,
        //             firstName:doc.data().postDetails[0].firstName,
        //             lastName:doc.data().postDetails[0].lastName,
        //             password:doc.data().postDetails[0].password

        //         })
        //        // window.location.href = "/profile"
        //     });
        


    }

    render() {
        return (
            <section class="vh-100">
                <Header></Header>
                <div class="container py-5 h-100">
                    <div class="row justify-content-center align-items-center h-100">
                        <div class="col-12 col-lg-9 col-xl-7">
                            <div class="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }} >
                                <div class="card-body p-4 p-md-5">
                                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Login</h3>
                                    <form>

                                        <div class="row">
                                            <div class="col-md-6 mb-4">

                                                <div class="form-outline" style={{ width: '624px' }}>
                                                    <input type="text" id="useremail" name="useremail" placeholder="Email " defaultValue={this.state.useremail} class="form-control form-control-lg" />
                                                    {/* <label class="form-label" for="firstName">First Name</label> */}
                                                </div>

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 mb-4">

                                                <div class="form-outline" style={{ width: '624px' }}>
                                                    <input type="text" id="password" name="password" placeholder="Password " defaultValue={this.state.password} class="form-control form-control-lg" />
                                                    {/* <label class="form-label" for="lastName">Last Name</label> */}
                                                </div>

                                            </div>

                                        </div>
                                        <div class="form-check d-flex justify-content-center mb-5" style={{ marginRight: '466px' }}>
                                            <input
                                                class="form-check-input me-2"
                                                type="checkbox"
                                                value=""
                                                id="form2Example3c"
                                            />
                                            <label class="form-check-label" for="form2Example3">
                                                Remember Me
                                            </label>
                                        </div>
                                        <div style={{ width: '624px' }}>
                                            <input class="btn btn-primary btn-lg" type="submit" value="Login" onClick={this.handleLogin} />
                                        </div>
                                        <div class="row">
                                            <a href="" class="form-check-label" for="form2Example3">
                                                Forgot Password?
                                            </a>
                                        </div>
                                        <div class="row">
                                            <label href="" class="form-check-label" for="form2Example3">
                                                Not a Member Yet? <a href="/registration" style={{ color: 'red' }}> JOIN NOW</a>
                                            </label>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </section>
        )
    }

}
export default login;