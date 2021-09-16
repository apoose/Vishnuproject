import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Footer from './footer';
import user from './assests/user.png'
import Firebase from 'firebase';
import config from "./config.js";
class profile extends React.Component {
    constructor() {
        super()
        this.state = {
            
        }
        this.editProfile = this.editProfile.bind(this)
        this.changePassword =this.changePassword.bind(this)
    }
    changePassword (){
        window.location.href="/changePassword"
    }
    editProfile(){
        window.location.href="/editProfile"
    }
    async componentDidMount() {
        let firstName = localStorage.getItem('firstName') +"\n" + localStorage.getItem('lastName')
        let mobile = localStorage.getItem('Mobile')
        let userEmail =localStorage.getItem('useremail')
        this.setState({
            firstName:firstName,
            mobile:mobile,
            userEmail:userEmail
        })
        // const ref = Firebase
        //     .firestore()
        //     .collection("user123");
        // const data = await ref.get();
        
        // data.forEach(doc => {
        //     console.log(doc.id, '=>', doc.data());
        //     this.setState({
        //         userDetails: doc.data().postDetails
        //     })
        // });
        
       


    }
    render() {

        return (
            <section class="h-100 h-custom" >
                <Header></Header>
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col-lg-8 col-xl-6">
                            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Profile</h3>
                            <div class="card rounded-3">
                                {/* <img src={user} alt="Sample photo" style={{ width: '9%!important', marginRight: '606px', marginTop: '56px' }}></img> */}
                                <div class="card-body p-4 p-md-5">
                                    
                                        <div>
                                            <label class="form-label" for="lastName">Name : {this.state.firstName}</label><br></br>
                                            <label class="form-label" for="lastName">Mobile: {this.state.mobile }</label><br></br>
                                            <label class="form-label" for="lastName">Email:{this.state.userEmail}</label><br></br>
                                        </div>
                                        
                                    <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <input class="btn btn-primary btn-lg" type="submit" value="Edit Profile"  onClick={this.editProfile}/>
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input class="btn btn-primary btn-lg" type="submit" value="Change Password" onClick={this.changePassword}/>
                                            </div>
                                        </div>
                                    </div>

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
export default profile;













