import React, { useState } from 'react'
import Axios from 'axios'
import async from 'hbs/lib/async';
function Home() {

    const [data, setdata] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile_number: "",
        password: ''
    });

    const handel = (e) => {
        const newdata = { ...data };
        newdata[e.target.name] = e.target.value;
        setdata(newdata);
        console.log(newdata);




    }

    const submit = async (e) => {
        e.preventDefault();
        await Axios({
            method: 'post',
            url: '/studentregistration',
            data: {
                first_name: data.first_name,
                last_name: data.last_name,
                email: data.email,
                mobile_number: data.mobile_number,
                password: data.password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (res) {
                console.log(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <>
            <div className="maincontainer">
                <div className="form">
                    <div className="signinandsignup">
                        <form onSubmit={(e) => submit(e)} method="post">
                            <h2>SignUp</h2>


                            <div className="input">
                                <i className="glyphicon glyphicon-user"></i>
                                <input type="text" onChange={(e) => handel(e)} value={data.first_name} name="first_name" placeholder="FirstName" />
                            </div>

                            <div className="input">
                                <i className="glyphicon glyphicon-user"></i>
                                <input type="text" onChange={(e) => handel(e)} value={data.last_name} name="last_name" placeholder="LastName" />
                            </div>




                            <div className="input">
                                <i className="glyphicon glyphicon-envelope"></i>
                                <input type="email" onChange={(e) => handel(e)} value={data.email} name="email" placeholder="Email" />
                            </div>


                            <div className="input">
                                <i className="fa fa-phone"></i>
                                <input type="tel" onChange={(e) => handel(e)} value={data.mobile_number} name="mobile_number" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" maxlength="14" required />
                            </div>


                            <div className="input">
                                <i className="glyphicon glyphicon-lock"></i>
                                <input type="password" onChange={(e) => handel(e)} value={data.password} name="password" placeholder="Password" />
                            </div>

                            <div className="input">
                                <i className="glyphicon glyphicon-lock"></i>
                                <input type="password" onChange={(e) => handel(e)} value={data.first_name} name="confirmpass" placeholder="Confirm Password" />
                            </div>
                            <input type="submit" value="SignUp" className="btn" />

                            <div className="socialmedia">
                                <a href="#" className="icon"><i className="fa fa-facebook"></i></a>
                                <a href="#" className="icon"><i className="fa fa-instagram"></i></a>
                                <a href="#" className="icon"><i className="fa fa-twitter"></i></a>
                                <a href="#" className="icon"><i className="fa fa-linkedin"></i></a>
                            </div>
                        </form>
                    </div>




                </div>
            </div>
        </>

    )
}

export default Home