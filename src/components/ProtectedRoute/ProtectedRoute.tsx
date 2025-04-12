import { useSelector } from "react-redux";
import { getIsAuthChecked, getUser } from "../../services/user/selectors";
import { Navigate, useLocation } from "react-router-dom";
import { RingLoader } from "react-spinners";
import protectedRouteStyles from "./protectedRoute.module.css";

type TProtectedRouteProps = {
  onlyUnAuth?: boolean;
  component: React.ReactNode;
};

const ProtectedRoute = ({ onlyUnAuth = false, component }: TProtectedRouteProps) => {
  const isAuthChecked = useSelector(getIsAuthChecked);
  const user = useSelector(getUser);
  const location = useLocation();

  if (!isAuthChecked) {
    return (
      <div className={protectedRouteStyles.loader}>
        <RingLoader color="#00cccc" />
      </div>
    );
  }
  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }
  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = ProtectedRoute;

type TOnlyUnAuthProps = {
  component: React.ReactNode;
};

export const OnlyUnAuth = ({ component }: TOnlyUnAuthProps) => <ProtectedRoute onlyUnAuth={true} component={component} />;
