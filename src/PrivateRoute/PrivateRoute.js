import { Route, Redirect } from "react-router-dom";
import useAuth from "../Hooks/useAuth";



function PrivateRoute(props) {
  const { children, ...rest } = props;


  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="text-center spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;