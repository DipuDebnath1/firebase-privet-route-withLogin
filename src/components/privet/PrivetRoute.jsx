import { useContext } from "react";
import { authContxt } from "../../AuthProvider/Authprovider";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {

    const {user , loader} = useContext(authContxt);

    if (loader) {
       return <span className="loading loading-spinner loading-lg"></span>
    }

   if (user) {
         return children
     }
     return <Navigate to={'/login'}></Navigate>
    
};

export default PrivetRoute;