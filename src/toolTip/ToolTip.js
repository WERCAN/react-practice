import React, { forwardRef } from "react";
import Tippy from "@tippy.js/react";
import "tippy.js/dist/tippy.css";
import ColoredTooltip from "./ColoredTooltip";
import CostumChild from "./CostumChild";
function ToolTip() {
  return (
    <div>
      <div style={{ paddingBottom: "1.3rem" }}>
        <Tippy arrow={false} delay={1000} placement={"right"} content="Basic Tooltip">
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "1.3rem" }}>
        <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "1.3rem" }}>
        <Tippy content={<ColoredTooltip></ColoredTooltip>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "1.3rem" }}>
        <Tippy content={<ColoredTooltip></ColoredTooltip>}>
          <CostumChild></CostumChild>
        </Tippy>
      </div>
    </div>
  );
}

export default ToolTip;
