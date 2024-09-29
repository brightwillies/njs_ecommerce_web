import { useEffect, useState } from "react"
import "./LoginSigup.scss"


function LoginSignup() {
    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    })
    const changeHandler = (e)=>{
   setFormData({...formData, [e.target.name]:e.target.value});
    }
    const login = async () => {
        let responseData;
        await fetch('https://njs-ecom-api.onrender.com/login',{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type':"application/json"
            },
            body:JSON.stringify(formData), 
        }).then((response)=> response.json()).then((data)=>{responseData =data})
       
      
        if(responseData.success){ 
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }else{
            alert(responseData.errors);
        }

    }
    const signup = async () => {
     
        let responseData;
        await fetch('https://njs-ecom-api.onrender.com/signup',{
            method:'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type':"application/json"
            },
            body:JSON.stringify(formData), 
        }).then((response)=> response.json()).then((data)=>{responseData =data})
       
        console.log(responseData);
        if(responseData.success){ 
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }else{
            alert(responseData.errors);
        }

    }
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>   {state === "Sign up" ? "Sign Up" : "Login"}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign up" ? <input type="text" onChange={changeHandler}  name="username" value={formData.username}  placeholder="Your name" /> : <></>}

                    <input type="email"  onChange={changeHandler}  name="email" value={formData.email} placeholder="Your email" />
                    <input type="password"  onChange={changeHandler}  name="password" value={formData.password} placeholder="Your password" />
                </div>

                <button onClick={() => {
                    state === "Login" ? login() : signup()
                }} > Continue</button>
                {state === "Sign up" ? <p className="loginsignup-login"> Already  have an  account? <span
                    onClick={() => { setState('Login') }}
                >Login</span> </p>
                    : <p className="loginsignup-login"> Create an account? <span onClick={() => { setState('Sign up') }}> Click Here </span> </p>
                }


                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, l agree to the terms  conditions</p>
                </div>

            </div>
        </div>
    )
}

export default LoginSignup
