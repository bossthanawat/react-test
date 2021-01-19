import Router from "next/router";
import { useRouter } from "next/router";
import { createContext, useEffect, useReducer, useContext } from "react";
export const AuthContext = createContext({});

const initialState = {
  user: null,
  isAuth: false,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuth: false,
        user: null,
      };
    case "SET_STATE_LOCAL":
      return {
        ...state,
        isAuth: JSON.parse(localStorage.getItem("user") ? true : false),
        user: JSON.parse(localStorage.getItem("user")),
        token: JSON.parse(localStorage.getItem("token")),
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: "SET_STATE_LOCAL" });
  }, []);

  const { user, token, isAuth } = state;

  const login = (payload) => dispatch({ type: "LOGIN", payload });
  const logout = (payload) => dispatch({ type: "LOGOUT", payload });

  return (
    <AuthContext.Provider value={{ user, token, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// isAuth : JSON.parse(localStorage.getItem("user")) ? true : false,

export const ProtectRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { events } = useRouter();
  let isAuth
  useEffect(() => {
    if (typeof window !== "undefined") {
      // client-side-only code
      isAuth = JSON.parse(localStorage.getItem("user")) ? true : false
      if (isAuth) {
        // Router.push("/");
      } else {
        Router.push("/login");
      }
    }

    // Check that a new route is OK
    const handleRouteChange = async (url) => {
      if (url === "/login" && isAuth) {
        // Router.push("/");
        window.location.href = '/'
      }
    };
    // Monitor routes
    events.on("routeChangeStart", handleRouteChange);
    return () => {
      events.off("routeChangeStart", handleRouteChange);
    };
  }, [user]);
  return children;
};
