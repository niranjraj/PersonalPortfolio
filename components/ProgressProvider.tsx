import React from "react";

type Props = {
  valueStart: number;
  valueEnd: number;
  children: (value: number) => React.ReactElement<any, any>;
};
const ProgressProvider = ({ valueStart, valueEnd, children }: Props) => {
  const [value, setValue] = React.useState(valueStart);
  React.useEffect(() => {
    let initialLoad = setTimeout(() => setValue(valueEnd), 1000);
    return () => {
      clearTimeout(initialLoad);
    };
  }, [valueEnd]);

  return children(value);
};
export default ProgressProvider;
