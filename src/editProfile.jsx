import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Footer from './footer';
import user from './assests/user.png'
import $, { event } from "jquery";
class editProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "", lastName: ""

    }
    this.edithandle = this.edithandle.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  edithandle = (e) => {

    e.preventDefault();
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let useremail = this.state.useremail;
    let country = this.state.country;
    let Mobile = this.state.Mobile;
    let curriculum = this.state.curriculum;
    let password = this.state.password;
    let confirmpassword = this.state.confirmpassword;

    if (!this.state.firstName) {
      $("#errorMsg").text("Please enter firstName");
    }
    else if (!this.state.lastName) {
      $("#errorMsg").text("Please enter lastName");
    }
    else if (!this.state.useremail) {
      $("#errorMsg").text("Please enter email");
    }
    else if (!this.state.country) {
      $("#errorMsg").text("Please select country");
    }
    else if (!this.state.Mobile) {
      $("#errorMsg").text("Please enter Mobile");
    }
    else if (!this.state.curriculum) {
      $("#errorMsg").text("Please select curriculum");
    }
    else if (!this.state.password) {
      $("#errorMsg").text("Please enter password");
    }
    else if (!this.state.confirmpassword) {
      $("#errorMsg").text("Please enter confirmpassword");
    }
    else if (this.state.password != this.state.confirmpassword) {
      $("#errorMsg").text("Password Not matching");
    }
    else {

      localStorage.setItem('firstName', firstName)
      localStorage.setItem('lastName', lastName)
      localStorage.setItem('useremail', useremail)
      localStorage.setItem('country', country)
      localStorage.setItem('Mobile', Mobile)
      localStorage.setItem('curriculum', curriculum)
      localStorage.setItem('password', password)
      localStorage.setItem('confirmpassword', confirmpassword)
      window.location.href = "/profile"
    }

  }
  
  componentDidMount() {
    let firstName = localStorage.getItem('firstName')
    let lastName = localStorage.getItem('lastName')
    let useremail = localStorage.getItem('useremail')
    let country = localStorage.getItem('country')
    let Mobile = localStorage.getItem('Mobile')
    let curriculum = localStorage.getItem('curriculum')
    let password = localStorage.getItem('password')
    let confirmpassword = localStorage.getItem('confirmpassword')
    this.setState({
      firstName: firstName,
      lastName: lastName,
      useremail: useremail,
      country: country,
      Mobile: Mobile,
      curriculum: curriculum,
      password: password,
      confirmpassword: confirmpassword


    })

  }
  render() {
    return (<section class="vh-100">
      <Header></Header>
      <div class="container py-5 h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-12 col-lg-9 col-xl-7">
            <div class="card shadow-2-strong card-registration" style={{ borderRadius: '15px' }} >
              <div class="card-body p-4 p-md-5">
                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Edit Profile</h3>
                <form>
                <label id="errorMsg" className="inputError"></label>
                  <div class="row">
                    <div class="col-md-6 mb-4">

                      <div class="form-outline">
                        <input type="text" name="firstName" id="firstName" placeholder="First Name *" class="form-control form-control-lg" defaultValue={this.state.firstName} onChange={this.handleInputChange} />
                        {/* <label class="form-label" for="firstName">First Name</label> */}
                      </div>

                    </div>
                    <div class="col-md-6 mb-4">

                      <div class="form-outline">
                        <input type="text" id="lastName" name="lastName" placeholder="Last Name *" class="form-control form-control-lg" value={this.state.lastName} onChange={this.handleInputChange} />
                        {/* <label class="form-label" for="lastName">Last Name</label> */}
                      </div>

                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 d-flex align-items-center">

                      <div class="form-outline datepicker w-100">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          id="birthdayDate"
                          placeholder="Email(UserName)"
                          value={this.state.useremail}
                          onChange={this.handleInputChange}
                          name="useremail"
                        />
                       
                      </div>

                    </div>
                    <div class="col-md-6 mb-4 d-flex align-items-center">

                      <select name="country" class="select form-control-lg" style={{ width: '257px' }} name="country" id="country" onChange={this.handleInputChange} value={this.state.country}>
                        <option value="Choose Country">Choose Country</option>
                        <option value="India">India</option>
                        <option value="China">China</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Peru">Peru</option>
                        <option value="Italy">Italy</option>
                        <option value="Spain">Spain</option>

                      </select>

                    </div>

                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">

                      <div class="form-outline">
                        <input type="email" name="Mobile" id="emailAddress" placeholder="Mobile" class="form-control form-control-lg" value={this.state.Mobile} onChange={this.handleInputChange} />
                        {/* <label class="form-label" for="emailAddress">Email</label> */}
                      </div>

                    </div>
                    <div class="col-md-6 mb-4 pb-2">

                      <select name="curriculum" class="select form-control-lg" name="curriculum" id="curriculum" style={{ width: '257px' }} onChange={this.handleInputChange} value={this.state.curriculum}>
                        <option value="Curriculum">Curriculum</option>
                        <option value="HS">HS</option>
                        <option value="HSS">HSS </option>
                        <option value="PG">PG </option>
                      </select>
                    </div>
                  </div>

                  <div class="row" style={{ marginBottom: '30px', width: '283px' }}>
                    <div class="col-12">

                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="birthdayDate"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="password"
                      />

                    </div>
                  </div>
                  <div class="row" style={{ width: '283px' }}  >
                    <div class="col-12 ">

                      <input
                        type="password"
                        class="form-control form-control-lg"
                        id="birthdayDate"
                        placeholder="Confirm Password"
                        value={this.state.confirmpassword}
                        onChange={this.handleInputChange}
                        name="confirmpassword"
                      />

                    </div>
                  </div>
                  <div class="mt-4 pt-2">
                    <input class="btn btn-primary btn-lg" type="submit" value="Edit" onClick={this.edithandle} />
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
export default editProfile;