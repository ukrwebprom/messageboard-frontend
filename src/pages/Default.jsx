import { useUser } from "../utils/useUser"
export const Default = () => {
    const {authToken, myLocation} = useUser();

    return(
        <>
        <h1>Default page</h1>
        {authToken? <p>{authToken}</p> : <p>No Token</p>}
        {myLocation? <p>{myLocation.lat} {myLocation.lng}</p> : <p>No location</p>}
        </>
    )
}