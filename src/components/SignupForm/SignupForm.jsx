import './signupform.css';
import { useState } from 'react';
import { signUp } from '../../serverAPI/serverAPI';
import { EnterForm } from '../EnterForm/EnterForm';
import { getMessage } from "../../utils/getMessage";
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const SignupForm = (onSuccess) => {
    const [isError, setIsError] = useState('');
    const onSignUp = async (e) => {
        e.preventDefault();
        const {email, password} = e.target.elements;

        try{
            const res = await signUp({
                email:email.value,
                password:password.value
            });
            onSuccess();
        } catch(err) {
            setIsError(err.message);
        } 
    }

    return(
        <div>
            <EnterForm onSubmit={onSignUp} title={getMessage('signupbtn', 'ru')} />
            {isError && <ErrorMessage mes={isError} />}
        </div>
    )
}