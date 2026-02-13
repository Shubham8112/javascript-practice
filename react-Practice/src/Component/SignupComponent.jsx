import './Signup.css';
import {useState} from "react";
function SignupComponent() {
    const [formData, setformData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        dateofbirth: '',
        password: ''
    })
    const [error,setError] = useState({});
    const Validate = () =>{
        let allError = {};
            if(!formData.firstname){
                allError.firstname = 'First name is required';
            }
            if(!formData.lastname){
                allError.lastname = 'Last name is required';
            }
            if(!formData.email){
                allError.email = 'Email is required';
            }
            if(!formData.dateofbirth){
                allError.dateofbirth = 'Date of birth is required';
            }
            if(!formData.password){
                allError.password = 'Password is required';
            }
            setError(allError)
            return Object.keys(allError).length ===0;
    }
     const handleChange = (e) => {
        setformData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Your form data', formData);
        if(Validate()){
            alert("Success");
            console.log("Your form Data",formData)
        }
    }
    return (
        <div className="box">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name='firstname'
                    onChange={handleChange}
                />
                {error.firstname&&<p style={{color:'red'}}>{error.firstname}</p>}
                <br />
                <input
                    type="text"
                    placeholder="Last Name"
                    name='lastname'
                    onChange={handleChange}
                />
                 {error.lastname&&<p style={{color:'red'}}>{error.lastname}</p>}
                <br />
                <input
                    type="email"
                    placeholder="Enter your Email"
                    name='email'
                    onChange={handleChange}
                    />
                {error.email&&<p style={{color:'red'}}>{error.email}</p>}
                <br />
                <input
                    type="date"
                    placeholder="Date of birth"
                    name='dateofbirth'
                    onChange={handleChange}
                    />
                {error.dateofbirth &&<p style={{color:'red'}}>{error.dateofbirth}</p>}
                <br />
                <input
                    type="Password"
                    placeholder="Enter your password"
                    name='password'
                    onChange={handleChange}
                    />
                {error.password &&<p style={{color:'red'}}>{error.password}</p>}
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default SignupComponent;