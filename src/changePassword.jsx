import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Footer from './footer';
import $, { event } from "jquery";
class changePassword extends React.Component {
constructor(props){
    super(props)
    this.state={

    }
    this.changePassword = this.changePassword.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
}
handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

changePassword= (e) => {

    e.preventDefault();
    let password = this.state.password;
    let confirmpassword = this.state.confirmpassword;
    if (!this.state.password) {
        $("#errorMsg").text("Please enter password");
      }
      else if (!this.state.confirmpassword) {
        $("#errorMsg").text("Please enter confirmpassword");
      }
      else if (this.state.password != this.state.confirmpassword) {
        $("#errorMsg").text("Password Not matching");
      }
      else {
        localStorage.setItem('password', password)
        localStorage.setItem('confirmpassword', confirmpassword)
        window.location.href ="/profile"
      }

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
                                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Change Password</h3>
                                    <form>
                                    <label id="errorMsg" className="inputError"></label>
                                        <div class="row">
                                            <div class="col-md-6 mb-4">

                                                <div class="form-outline" style={{ width: '624px' }}>
                                                    <input type="text" value={this.state.password} id="password" placeholder="Password " class="form-control form-control-lg" onChange={this.handleInputChange}
                        name="password" />
                                                    {/* <label class="form-label" for="firstName">First Name</label> */}
                                                </div>

                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 mb-4">

                                                <div class="form-outline" style={{ width: '624px' }}>
                                                    <input type="text" value={this.state.confirmpassword} id="confirmpassword" placeholder="confirm Password " class="form-control form-control-lg" onChange={this.handleInputChange}
                        name="confirmpassword" />
                                                    {/* <label class="form-label" for="lastName">Last Name</label> */}
                                                </div>

                                            </div>

                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input class="btn btn-primary btn-lg" type="submit" value="Change Password" onClick={this.changePassword}/>
                                            </div>
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
export default changePassword;