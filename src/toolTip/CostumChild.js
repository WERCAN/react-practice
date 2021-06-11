import React, { forwardRef } from "react";

const CostumChild = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ display: "inline-block" }}>
      <div>First line</div>
      <div>Second line</div>
    </div>
  );
});

export default CostumChild;
