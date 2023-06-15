import { SignupForm } from "../components/SignupForm/SignupForm"
import { useState } from "react";
import { signUp } from "../serverAPI/serverAPI";
import { getMessage } from "../utils/getMessage";
import { Layouts } from "../components/Layouts/Layouts";
import { EnterForm } from '../components/EnterForm/EnterForm';
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage';

export const SignUp = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState('');
    
    const onSignUp = async (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;

        try{
            const res = await signUp({
                email:email.value,
                password:password.value
            });
            setIsSuccess(true);
        } catch(err) {
            setIsError(err.message);
        } 
    }

    return(
        <Layouts>
            {isSuccess ? <p>Registered</p> :  
            <div>
                <EnterForm onSubmit={onSignUp} title={getMessage('signupbtn', 'ru')} />
                {isError && <ErrorMessage mes={isError} />}
            </div>
            }
        </Layouts>
        
    )
}