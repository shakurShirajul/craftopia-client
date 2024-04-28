import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    if (loader) {
        return <div className="flex justify-center"><span className="loading loading-infinity loading-lg"></span></div>
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/signin" replace={true}></Navigate>
};

export default PrivateRoute;