import {  useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.css';


const Login = () => {
//     const initialvalue = { email: "", password: "" };
//     const [formvalue, setformvalue] = useState(initialvalue);
//     const [formError, setFormError] = useState();
//     const [isSubmit, setIsSubmit]= useState(false);
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setformvalue({ ...formvalue, [name]: value });
//     };
//     const handleSubmit = (e) = {
//         e.preventDefault();
//         setFormError(validate (formvalue));
//         setIsSubmit(true);
// };

// const validate = (values) => {
//     const errors = {};
//     const regex = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
//     if (!values.email) {
//         errors.email = "Email is required";
//     }
//     if (!values.password) {
//         errors.password = "Password is required";
//     }
//     return errors;
// }
const history = useHistory();
const goHome = () => {
    history.push('/home');

}
return (

    <div class="main_login">
        <div class="fb">
            <div>
                <img class="ff" src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="Facebook" />
            </div>
            <div>
                <h2 class="tt"> Facebook helps you connect and share with the people in your life.</h2>
            </div>
        </div>
        <div class="form_login">
            <div class="a">
                {/* <pre>{JSON.stringify(formvalue, undefined, 2)}</pre> */}
                {/* <form onSubmit={handleSubmit}> */}
                    <div>
                        <input type="text"  placeholder="Email address or phone number" class="search"  />
                    </div>
                    <div>
                        <input type="password" placeholder="Password" class="search"  />
                    </div>
                    <button class="search1" onClick={goHome}>Log In</button>
                {/* </form> */}
                <br />

                <div class="p"><a href="https://www.facebook.com/">Forgotten password?</a></div>
                <div class="bb"></div>
                <button class="search2">Create New Account</button>

            </div>
            <div class="c">
                <a href="https://www.youtube.com/" class="kk">Create a Page</a> for a celebrity, brand or business.
            </div>
        </div>
    </div>
)
};

export default Login;