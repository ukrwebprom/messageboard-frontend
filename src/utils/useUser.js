import { useState, useEffect } from "react";
import { checkToken } from "../serverAPI/serverAPI";

export const useUser = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [myLocation, setMyLocation] = useState(null);
    
    const logIn = token => {
        setIsLoggedIn(true);
        localStorage.setItem("authToken", token);
    }

    const setLocation = data => {
        localStorage.setItem('location', JSON.stringify(data));
        setMyLocation(data);
    }

    useEffect(() => {
        const initUser = async() => {
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
            const loc = localStorage.getItem("location");
            const l = JSON.parse(loc);
            console.log("location", l);
            if(loc) setMyLocation(l);
        }
        initUser();
    }, [])

    return {isLoggedIn, logIn, myLocation, setLocation};
}