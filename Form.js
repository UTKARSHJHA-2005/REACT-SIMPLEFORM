import React from "react";
import './App.css';
import { useState } from "react";
function Form(){
    const data={name:"",email:"",password:""};
    const [inputdata,setdata]=useState(data);
    const [flag,setflag]=useState(false);
    function handlechange(e){
        setdata({...inputdata,[e.target.name]:e.target.value});
    }
    function handelesubmit(e){
        e.preventDefault();
        if(!inputdata.name || !inputdata.email || !inputdata.password){
            alert('All Fields are mandatory');
        }else{
            alert('You have registered successfully');
        }
    }
    return (
        <>
        <form className="container" onSubmit={handelesubmit}>
            <div className="head">
                <h1>REGISTRATION FORM</h1>
            </div>
            <div>
                <input type="text" placeholder="Enter your name" name="name" value={inputdata.name}  onChange={handlechange}></input>
            </div>
            <div>
                <input type="text" placeholder="Enter your Email" name="email" value={inputdata.email} onChange={handlechange}></input>
            </div>
            <div>
                <input type="text" placeholder="Enter Password" name="password" value={inputdata.password} onChange={handlechange}></input>
            </div>  
            <div>
                <button type="submit">SUBMIT</button>
            </div>
        </form>
        </>
    )
}
export default Form;