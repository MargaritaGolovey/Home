import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Page not Found</h1>
      <button onClick={() => navigate("/")}>back to Home Page</button>
    </div>
  );
};
export default ErrorPage;
