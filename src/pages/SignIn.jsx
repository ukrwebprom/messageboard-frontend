import { useEffect, useState } from "react";
import { EnterForm } from "../components/EnterForm/EnterForm"
import { signIn } from "../serverAPI/serverAPI";
import { useUser } from "../utils/useUser";
import { Layouts } from "../components/Layouts/Layouts";
import { useNavigate } from "react-router-dom";


export const SignIn = () => {
    const navigate = useNavigate();
    const [isError, setIsError] = useState('');
    const {logIn} = useUser();

    const onSignIn = async (e) => {
        e.preventDefault();
        setIsError('');
        const {email, password} = e.target.elements;

        try{
            const res = await signIn({
                email:email.value,
                password:password.value
            });
            logIn(res);
            navigate("/", { replace: true });
        } catch(err) {
            setIsError(err.message);
        } 
    }

    return(
        <EnterForm onSubmit={onSignIn} title='Login' error={isError} btn='Sign In'/>
    )                       
}