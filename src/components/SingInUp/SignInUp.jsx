import { useState } from "react"
import { SigninForm } from "../SinginForm/SigninForm";
import { SignupForm } from "../SignupForm/SignupForm";
export const SignInUp = () => {
    const [modeIn, setModeIn] = useState(false);
    const toggleMode = () => setModeIn((c) => !c);
    return(
        <>
        {modeIn? <SigninForm /> : <SignupForm />}
        <button type='button' onClick={toggleMode}>{modeIn? 
        <p>I don't have an account yet</p> : <p>I already have account</p>}
        </button>
        </>
        
    )
}