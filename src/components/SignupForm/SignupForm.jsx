import './signupform.css';
import { useState } from 'react';
import { signUp } from '../../serverAPI/serverAPI';

export const SignupForm = () => {

    const [serverResponse, setServerResponse] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = e.target.elements;
        setServerResponse('Sending data');
        try{
            const res = await signUp({
                name:name.value,
                email:email.value,
                password:password.value
            });
            setServerResponse(`New user: ${res.name} is created`);
        } catch(err) {
            setServerResponse(err.message);
        }  
    }

    return(
        <div>
            <form className="signup-form" onSubmit={onSubmit}>
                <input type="text" placeholder="username" name="name" />
                <input type="text" placeholder="email" name="email" />
                <input type="password" placeholder="password" name="password" />
                <button type="submit">Sign up</button>
            </form>
            {serverResponse && <p>{serverResponse}</p>}
        </div>
    )
}