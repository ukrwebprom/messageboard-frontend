import { useState, useEffect, useRef, createContext, useContext } from "react";
import { getMe, logOut } from "../serverAPI/serverAPI";

const UserContext = createContext();
export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(null);
    const [myLocation, setMyLocation] = useState(null);
    const [userName, setUserName] = useState('');
    const init = useRef(false);

    const logIn = data => {
        setAuthToken(data.token);
        setUserName(data.name);
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("location", JSON.stringify(data.location));
    }

    const logMeOut = async () => {
        await logOut();
        setAuthToken(null);
        setUserName('');
        localStorage.setItem("authToken", '');
    }

    const setLocation = data => {
        localStorage.setItem('location', JSON.stringify(data));
        setMyLocation(data);
    }

    useEffect(() => {
        const getInit = async () => {
            init.current = true;
            const isLocation = localStorage.getItem("location");
            if(isLocation) setMyLocation(JSON.parse(isLocation))

            const isToken = localStorage.getItem("authToken");
            if(isToken) {
                const me = await getMe(isToken);
                if(me) {
                    setAuthToken(me.token);
                    localStorage.setItem("authToken", me.token);
                    setMyLocation(me.location);
                    localStorage.setItem("location", JSON.stringify(me.location));
                    setUserName(me.name);
                }
            }
        }
        if(!init.current) getInit();
    }, [])

    return (
        <UserContext.Provider value={{ authToken, logIn, myLocation, setLocation, userName, logMeOut }}>
          {children}
        </UserContext.Provider>
    );
}