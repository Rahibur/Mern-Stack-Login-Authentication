//add_data.js file is responsible for add_data form works

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FastRewindIcon from '@mui/icons-material/FastRewind';
const AddData = () => {


    const navigate = useNavigate("");//after registration user rendered to homepage
    //Syntaxt : const[value1,valu2] = usestate({});
    const [inpval, setINP] = useState({
        //These are the add_data form input fields 
       name: "", email: "", age: "", mobile: "", work: "", address: "", desc: "", linkedin: "", other: "", skills: "", experience: "", edu: ""
    });
    let name, value;

    const setdata = (e) => {
        //const {name,value}=e.target;
        name = e.target.name;
        value = e.target.value;

        setINP((preval) => {
            //setInp will take all the value field in the form and show it to user in the form 
            return {
                ...preval,
                [name]: value
            }
        })

        //setINP({...inpval,[name]:value});
    }



    //Transfering data to database 
    const addinpdata = async (e) => {
        e.preventDefault();
        const { name, email, work, address, mobile, desc, age, linkedin, other, skills, experience, edu } = inpval;
        const res = await fetch("/add_data/:id", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, work, address, mobile, desc, age, linkedin, other, skills, experience, edu
            })
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            window.alert("error");
            console.log("error");
        } else {
            window.alert("data added");
            navigate("/");
            console.log("data added");

        }
    }





    return (
        //value={inpval.name} onChange={setdata} take all the value field in the form and show it to user in the form 
        //onClick function calls transfering data code
        <div className="container">
           <div className="bb" > <NavLink to="/home/:id"><p><FastRewindIcon/>  Back to home</p></NavLink> </div>
            <form>
                    <div className="row">
                    
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">LinkedIn Profile</label>
                        <input type="text/number" value={inpval.linkedin} onChange={setdata} name="linkedin" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Other Profile</label>
                        <input type="text/number" value={inpval.other} onChange={setdata} name="other" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Skills</label>
                        <input type="text" value={inpval.skills} onChange={setdata} name="skills" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Work Experience</label>
                        <textarea className="form-control" value={inpval.experience} onChange={setdata} name="experience" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Education</label>
                        <textarea className="form-control" value={inpval.edu} onChange={setdata} name="edu" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>


                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">age</label>
                        <input type="number" value={inpval.age} onChange={setdata} name="age" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="exampleInputPassword1" />
                    </div>


                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">current Occupation</label>
                        <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control" id="exampleInputPassword1" />
                    </div>

                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">address</label>
                        <input type="text/number" value={inpval.address} onChange={setdata} name="address" class="form-control" id="exampleInputPassword1" />
                    </div>


                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea className="form-control" value={inpval.desc} onChange={setdata} name="desc" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                    <button type="submit" onClick={addinpdata} class="btn btn-success"style={{width:'100px',margin:'auto'}}>Submit</button>

                </div>

            </form>

        </div>


    )
}

export default AddData