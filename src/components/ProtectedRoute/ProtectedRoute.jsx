import { useSelector } from "react-redux"
import { getIsAuthChecked, getUser} from "../../services/user/selectors";
import { Navigate, useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners";
import PropTypes from "prop-types";

const ProtectedRoute = ({ onlyUnAuth = false, component }) => {
    const isAuthChecked = useSelector(getIsAuthChecked);
    const user = useSelector(getUser);
    const location = useLocation();

    if (!isAuthChecked) {
        return <div style={{width:"100%",height:"80vh", justifyContent:"center",alignItems:"center", display:"flex"}}><RingLoader color="#00cccc" /></div>
    }
    if (onlyUnAuth && user) {
        const { from } = location.state || { from: { pathname: "/" } };
        return <Navigate to={from} />
    }
    if (!onlyUnAuth && !user) {
        return <Navigate to="/login" state={{ from: location }}/>
    }

    return component;
};

 export const OnlyAuth = ProtectedRoute;
 export const OnlyUnAuth = (({component}) => (
    <ProtectedRoute onlyUnAuth={true} component={component}/>
 ))
 ProtectedRoute.propTypes = {
    onlyUnAuth: PropTypes.bool,
    component: PropTypes.node.isRequired, 
  };