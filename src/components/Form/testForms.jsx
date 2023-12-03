import { memo, useEffect } from "react";

const TestForm = () => {
  useEffect(() => {
    console.log("child render");
  });
  return <div>Privet</div>;
};
export default memo(TestForm);
