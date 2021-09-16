import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Footer from './footer';
import $, { event } from "jquery";
import Firebase from 'firebase';
import config from "./config.js";
class registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: [],

        }
        if (!Firebase.apps.length) {
            Firebase.initializeApp(config);;
        }


        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

    }
    async componentDidMount() {

        // let ref = Firebase.database().ref("/");
        // console.log("ref....",ref)
        //     const query = await db
        //   .collection("myapp-d9a34-default-rtdb")

        //   .get();
        // console.log(query)
    }

    handleRegister = (e) => {


        e.preventDefault();
        const { userData } = this.state;
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
        
            userData.push({ firstName, lastName, useremail, country, Mobile, curriculum, password, confirmpassword });
            this.setState({ userData });
            this.submitForm()

            // userData[0].firstName = firstName;
            // userData[1].lastName = lastName;
            // userData[2].useremail = useremail;
            // userData[3].country = country;
            // userData[4].Mobile = Mobile;
            // userData[5].curriculum = curriculum;
            // userData[6].password = password;
            // userData[7].confirmpassword = confirmpassword;
            // this.setState({ userData });
        }



    }
    async submitForm() {
        let firstName = this.state.firstName;
        let lastName = this.state.lastName;
        let useremail = this.state.useremail;
        let country = this.state.country;
        let Mobile = this.state.Mobile;
        let curriculum = this.state.curriculum;
        let password = this.state.password;
        let confirmpassword = this.state.confirmpassword;

        
        localStorage.setItem('firstName',firstName)
        localStorage.setItem('lastName',lastName)
        localStorage.setItem('useremail',useremail)
        localStorage.setItem('country',country)
        localStorage.setItem('Mobile',Mobile)
        localStorage.setItem('curriculum',curriculum)
        localStorage.setItem('password',password)
        localStorage.setItem('confirmpassword',confirmpassword)

        var postDetails = this.state.userData;
        console.log("post....",postDetails);
        if(postDetails.length>0){
        Firebase.firestore().collection('user123').add({
            postDetails
        });
        // const ref = Firebase
        //     .firestore()
        //     .collection("user123");
        // const data = await ref.get();
        
        // data.forEach(doc => {
        //     console.log(doc.id, '=>', doc.data());
        //     window.location.href ="/profile"
        // });
        window.location.href ="/profile"
    }


    }
    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
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
                                    <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration</h3>
                                    <form >
                                        <label id="errorMsg" className="inputError"></label>
                                        <div class="row">
                                            <div class="col-md-6 mb-4">

                                                <div class="form-outline">
                                                    <input type="text" id="firstName" name="firstName" placeholder="First Name *" value={this.state.firstName} class="form-control form-control-lg" onChange={this.handleInputChange} />
                                                    {/* <label class="form-label" for="firstName">First Name</label> */}
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4">

                                                <div class="form-outline">
                                                    <input type="text" id="lastName" name="lastName" placeholder="Last Name *" class="form-control form-control-lg" onChange={this.handleInputChange} />
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
                                                        id="useremail"
                                                        placeholder="Email(UserName)"
                                                        onChange={this.handleInputChange}
                                                        name="useremail"
                                                    />

                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4 d-flex align-items-center">

                                                <select class="select form-control-lg" style={{ width: '257px' }} name="country" id="country" onChange={this.handleInputChange}>
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
                                                    <input type="number" id="Mobile" name="Mobile" placeholder="Mobile" class="form-control form-control-lg" onChange={this.handleInputChange} />
                                                    {/* <label class="form-label" for="emailAddress">Email</label> */}
                                                </div>

                                            </div>
                                            <div class="col-md-6 mb-4 pb-2">

                                                <select class="select form-control-lg" name="curriculum" id="curriculum" style={{ width: '257px' }} onChange={this.handleInputChange}>
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
                                                    id="password"
                                                    placeholder="Password"
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
                                                    id="confirmpassword"
                                                    placeholder="Confirm Password"
                                                    onChange={this.handleInputChange}
                                                    name="confirmpassword"
                                                />

                                            </div>
                                        </div>
                                        <div class="mt-4 pt-2">
                                            <input class="btn btn-primary btn-lg" type="submit" value="Register" onClick={this.handleRegister} />
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
export default registration;