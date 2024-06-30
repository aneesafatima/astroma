import React from "react";
import { BallTriangle } from "react-loader-spinner";

function Loader({ color }) {
  return (
    <div className="absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <BallTriangle
        height={70}
        width={70}
        radius={3}
        color={color}
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
}

export default Loader;
