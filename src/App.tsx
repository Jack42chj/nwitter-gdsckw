import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./routes/home";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";
import ProtectedRoute from "./components/protected-route";
import ResetPassword from "./routes/reset-password";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      }
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    background-color: #22A699;
    color: white;
    font-family: 'Patua One', serif;
  }
  &::-webkit-scrollbar {
      width: 8px;  
  }
  &::-webkit-scrollbar-thumb {
      background: #98D8AA; /* 스크롤바 색상 */
      border-radius: 10px; /* 스크롤바 둥근 테두리 */
  }
  &::-webkit-scrollbar-track {
      background: rgba(220, 20, 60, 0.1);  /*스크롤바 뒷 배경 색상*/
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async() => {
    await auth.authStateReady();
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
};

export default App;
