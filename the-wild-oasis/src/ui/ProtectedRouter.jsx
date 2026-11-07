import styled from "styled-components";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* eslint-disable react/prop-types */
function ProtectedRouter({ children }) {
  const navigate = useNavigate();
  //1. use cache
  const { isLoading, isAuthenticated } = useUser();

  //2. navigate /login if failed
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  //3. spinner when loading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  //4. run if success
  if (isAuthenticated) {
    return <>{children}</>;
  }
}
export default ProtectedRouter;
