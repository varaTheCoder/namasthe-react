import { useRouteError } from "react-router-dom";
const ErrorComp = () => {
    const errormsg = useRouteError();

    return (
        <>
        <div>OOPS!  </div>
        <div>Somethingwent wrong!</div>
        <div>{errormsg.status}</div>
        <div>{errormsg.statusText}</div>
        </>
    )
}
export default ErrorComp;