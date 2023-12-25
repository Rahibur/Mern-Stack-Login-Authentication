//Edit.js is responsible for updating the data

import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import FastRewindIcon from '@mui/icons-material/FastRewind';


const Update = () => {
    // const [getuserdata, setUserData] = useState([]);
    // console.log(getuserdata);
    const navigate = useNavigate("");
    const [inpval, setINP] = useState({
        name: "", email: "", age: "", mobile: "", work: "", address: "", desc: "", linkedin: "", other: "", skills: "", experience: "", edu: ""
    })
    const setdata = (e) => {
        const { name, value } = e.target;

        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })

        //setINP({...inpval,[name]:value});
    }


    const { id } = useParams("");
    console.log(id);
    //get data
    const getdata = async () => {

        const res = await fetch(`/getuser${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        console.log(data);
        if (res.status === 422 || !data) {
            console.log("error");
        } else {
            setINP(data);
            console.log("Get data");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    //update userdata
    const updateuser = async (e) => {
        e.preventDefault();
        const { name, email, work, address, mobile, age, desc, linkedin, other, skills, experience, edu } = inpval;
        const res2 = await fetch(`/updateuser/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, work, address, mobile, age, desc, linkedin, other, skills, experience, edu
            })
        });
        const data2 = await res2.json();
        console.log(data2)
        if (res2.status === 422 || !data2) {
            window.alert("Fill the data");
        } else {
            window.alert("Data added");

            navigate("/home");
        }
    }

    return (
        <div className="container">
              <div className="bb" > <NavLink to="/"><p><FastRewindIcon/>  Back to home</p></NavLink> </div>
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
                        <input type="text/number" value={inpval.other} onChange={setdata} name="Other" class="form-control" id="exampleInputPassword1" />
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
                    <button type="submit" onClick={updateuser} class="btn btn-success"style={{width:'100px',margin:'auto'}}>Submit</button>

                </div>

            </form>
        </div>

    )
}

export default Update




