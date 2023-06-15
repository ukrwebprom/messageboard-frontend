import { verify } from "../serverAPI/serverAPI";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";


export const VerifyEmail = () => {
    const {BASE_URL} = process.env;
    const isRequested = useRef(false);
    const { verificationToken } = useParams();
    const [currentState, setCurrentState] = useState('Checking');

    useEffect(() => {
        const sendRequest = async () => {
            isRequested.current = true;
            try{
                const res = await verify(verificationToken);
                setCurrentState(res.message);
            } catch(err) {
                setCurrentState(err.message);
            }
            
        }
        if(!isRequested.current) sendRequest();
    }, [isRequested, verificationToken])

    return(
        <h2>{currentState}</h2>
    )
}