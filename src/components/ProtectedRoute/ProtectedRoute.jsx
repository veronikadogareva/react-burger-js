import { useSelector } from "react-redux"
import { getIsAuthChecked, getUser} from "../../services/user/selectors";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ onlyUnAuth = false, component }) => {
    const isAuthChecked = useSelector(getIsAuthChecked);
    const user = useSelector(getUser);
    const location = useLocation();

    if (!isAuthChecked) {
        return <h2>Загрузка...</h2>
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