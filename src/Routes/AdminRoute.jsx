import { Navigate, useLocation } from "react-router-dom";
import UseAdmin from "../Hooks/UseAdmin";
import UseAuth from "../Hooks/UseAuth";
import PropTypes from "prop-types";

const AdminRoute = ( {children} ) => {
  const { user, loading } = UseAuth();
  const { data: isAdmin, isAdminPending } = UseAdmin();
  const location = useLocation();

  if (loading || isAdminPending) {
    return (
      <div className="flex items-center justify-center h-[100vh]">
        <img src="https://i.ibb.co/SsF2Lb0/loading-7528-256.gif" alt="" />
      </div>
    );
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={location?.pathname} replace></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
