import { useEffect, useState } from "react";
import { EnterForm } from "../components/EnterForm/EnterForm"
import { signIn } from "../serverAPI/serverAPI";
import { useUser } from "../utils/useUser";
import { Layouts } from "../components/Layouts/Layouts";



export const SignIn = () => {
    const [serverResponse, setServerResponse] = useState('');
    const [isError, setIsError] = useState('');
    const {logIn} = useUser();

    const onSignIn = async (e) => {
        e.preventDefault();
        setIsError('');
        const {email, password} = e.target.elements;
        setServerResponse('Sending data');
        try{
            const res = await signIn({
                email:email.value,
                password:password.value
            });
            logIn(res.token);
            setServerResponse('logged in');
        } catch(err) {
            setIsError(err.message);
        } 
    }

    return(
        <Layouts>
            <EnterForm onSubmit={onSignIn} title='Login' error={isError} btn='Sign In'/>
        </Layouts>
    )                       
}