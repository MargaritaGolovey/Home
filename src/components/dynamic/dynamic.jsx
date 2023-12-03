import { useParams } from "react-router";

const Dynamic = () => {
  const { id } = useParams();

  return <div>{id}</div>;
};
export default Dynamic;
