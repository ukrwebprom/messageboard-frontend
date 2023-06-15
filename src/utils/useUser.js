import { useState, useEffect } from "react";
import { checkToken } from "../serverAPI/serverAPI";

export const useUser = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const logIn = token => {
        setIsLoggedIn(true);
        localStorage.setItem("authToken", token);
    }

    useEffect(() => {
        const checkAuthToken = async() => {
            const authToken = localStorage.getItem("authToken");
            if(authToken) {
                try {
                    const userName = await checkToken(authToken);
                    console.log(userName);
                    setIsLoggedIn(true);
                } catch(err) {
                    setIsLoggedIn(false);
                }
            }
        }
        checkAuthToken();
    }, [])

    return {isLoggedIn, logIn};
}