// //Detail.js is responsible for viewing the user details . It also do other relivent works such as edit ,delete data

// import React, { useEffect, useState, useRef } from "react";
// import { useReactToPrint } from "react-to-print";
// //importing all the icons from material ui
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EmailIcon from '@mui/icons-material/Email';
// import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
// import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import DescriptionIcon from '@mui/icons-material/Description';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import PersonPinIcon from '@mui/icons-material/PersonPin';
// import EngineeringIcon from '@mui/icons-material/Engineering';
// import SchoolIcon from '@mui/icons-material/School';
// import DownloadIcon from '@mui/icons-material/Download';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import aboutpic from "../images/avatar.png";//importing pic
// import { NavLink, useNavigate, useParams } from "react-router-dom";
// import { Dialog } from 'primereact/dialog';
// import { Button } from 'primereact/button';
// import Avatar from 'react-avatar-edit';
// import FastRewindIcon from '@mui/icons-material/FastRewind';

// const Details = () => {
//     const componentRef = useRef();
//     const handlePrint = useReactToPrint({
//         content: () => componentRef.current,
//     });
//     const [getuserdata, setUserData] = useState([]);
//     const [visible, setVisible] = useState(false);
//     const [imgCrop, setimgCrop] = useState(false);
//     const [storeImage, setstoreImage] = useState([]);

//     const onCrop = (view) => {
//         setimgCrop(view)
//     }
//     const onClose = () => {
//         setimgCrop(null)
//     }

//     const saveImage = () => {
//         setstoreImage([...storeImage, { imgCrop }])
//         setVisible(false)
//     }
//     const profileImageShow = storeImage.map(item => item.imgCrop)
//     console.log(getuserdata);
//     const { id } = useParams("");
//     console.log(id);

//     const navigate = useNavigate("");


//     const getdata = async () => {

//         const res = await fetch(`/getuser/${id}`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         const data = await res.json();
//         console.log(data);
//         if (res.status === 422 || !data) {
//             console.log("error");
//         } else {
//             setUserData(data);
//             console.log("Get data");
//         }
//     }


//     useEffect(() => {
//         getdata();
//     }, [])

//     const deleteuser = async (id) => {
//         const res2 = await fetch(`/deleteuser/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "aplication/json"
//             }
//         });
//         const deletedata = await res2.json();
//         console.log(deletedata);
//         if (res2.status === 422 || !deletedata) {
//             console.log("error");
//         } else {
//             console.log("Data deleted");
//             navigate("/home")
//         }

//     }



//     return (
//         <div className="container mt-3">
//             <div className="animate-text"><h1 style={{ fontWeight: 400 }}>Here is Your Resume <span >{getuserdata.name}</span></h1> </div>
//             <div className="add_btn mb-3">
//                 <NavLink to={`/update/${getuserdata._id}`}><button className="btn btn-primary  mx-2"><EditIcon /></button></NavLink>
//                 <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}><DeleteIcon /></button>
//                 <button className="btn btn-success" onClick={handlePrint} style={{ marginLeft: 10 }} ><DownloadIcon /></button>
//             </div>

//             <Card sx={{ maxWidth: 900,marginBottom:6 }} ref={componentRef}>
//                 <CardContent>



//                 <div className="Skills_1"><h4>Resume</h4></div>



//                     <div className="row">
//                         <div className="left_view col-lg-4 col-md-4 col-12">

//                             <Dialog header={() => (
//                                 <p htmlFor="" className="text-2x1 font-semibold textcolor" style={{width:'190',textAlign:'center'}}>
//                                    <FastRewindIcon/> Update profile
//                                 </p>
//                             )}
//                                 visible={visible} onHide={() => setVisible(false)}>
//                                 <div className="confirmation_content ">
//                                     <div className=" flex_1 ">
//                                         <div className=" flex_2">
//                                             <Avatar
//                                                 width={380}
//                                                 height={180}
                                                
//                                                 onCrop={onCrop}
//                                                 onClose={onClose}

//                                             />
//                                             <Button onClick={saveImage} label="Save" icon="pi pi-check"  />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Dialog>
//                             <img src={profileImageShow.length ? profileImageShow : aboutpic} style={{ width: 180 }} alt="profile" onClick={() => setVisible(true)} />
//                             <h3 className="mt-3">Name : <span >{getuserdata.name}</span></h3>
//                             <p className="mt-3">Age : <span>{getuserdata.age}</span></p>
//                             <div className="Skills"><h5>Social Status</h5></div>
//                             <p className="mt-3"><EmailIcon />  Email : <span >{getuserdata.email}</span></p>
//                             <p className="mt-5"><MobileScreenShareIcon /> Mobile : <span>{getuserdata.mobile}</span></p>
//                             <p className="mt-5"><LinkedInIcon /> LinkedIn-Profile : <span>{getuserdata.linkedin}</span></p>
//                             <p className="mt-5"><PersonPinIcon /> Other-Profile : <span>{getuserdata.other}</span></p>
//                             <p className="mt-5"><LocationOnIcon /> Location : <span>{getuserdata.address}</span></p>
//                         </div>
//                         <div className="right_view col-lg-8 col-md-8 col-12">
//                             <div className="Skills"><h4>Skills And Work Experiences</h4></div>
//                             <p className="mt-5"><EngineeringIcon /> Skills : <span>{getuserdata.skills}</span></p>
//                             <p className="mt-5"><WorkOutlineIcon /> Work-Experience : <span>{getuserdata.experience}</span></p>
//                             <div className="Skills"><h4>Education And  Occupation</h4></div>
//                             <p className="mt-5"><SchoolIcon /> Education : <span>{getuserdata.edu}</span></p>
//                             <p className="mt-5"><WorkOutlineIcon /> Current-Occupation:<span>{getuserdata.work}</span></p>
//                             <p className="mt-5"><DescriptionIcon /> Description:<span>{getuserdata.desc}</span></p>
//                         </div>


//                     </div>

//                 </CardContent>
//             </Card>
//         </div>

//     )
// }

// export default Details





