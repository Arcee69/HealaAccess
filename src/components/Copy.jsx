import React from "react";
import t from "prop-types";
import { useCopy } from "../hooks/useCopy";


const Copy = ({ text, name, ...props }) => {
  const { copyToClipBoard } = useCopy();

  return (
    <button
      {...props}
      style={{
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => copyToClipBoard(text, name)}
      className="flex items-center gap-1 justify-center text-center mx-auto"
    >
      <p>https://onelink.to/wqu28p</p>
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_17091_13098)">
<path d="M9.5625 11.25H4.3125C3.86495 11.25 3.43573 11.0722 3.11926 10.7557C2.80279 10.4393 2.625 10.0101 2.625 9.5625V4.3125C2.625 3.86495 2.80279 3.43573 3.11926 3.11926C3.43573 2.80279 3.86495 2.625 4.3125 2.625H9.5625C10.0101 2.625 10.4393 2.80279 10.7557 3.11926C11.0722 3.43573 11.25 3.86495 11.25 4.3125V9.5625C11.25 10.0101 11.0722 10.4393 10.7557 10.7557C10.4393 11.0722 10.0101 11.25 9.5625 11.25Z" fill="#699BF7"/>
<path d="M3.75 1.875H9.27844C9.16176 1.54623 8.94622 1.26161 8.66138 1.06019C8.37654 0.858773 8.03636 0.750421 7.6875 0.75H2.4375C1.98995 0.75 1.56072 0.92779 1.24426 1.24426C0.92779 1.56072 0.75 1.98995 0.75 2.4375V7.6875C0.750421 8.03636 0.858773 8.37654 1.06019 8.66138C1.26161 8.94622 1.54623 9.16176 1.875 9.27844V3.75C1.875 3.25272 2.07254 2.77581 2.42417 2.42417C2.77581 2.07254 3.25272 1.875 3.75 1.875Z" fill="#699BF7"/>
</g>
<defs>
<clipPath id="clip0_17091_13098">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>

    </button>
  );
};

Copy.propTypes = {
  name: t.string,
  text: t.string,
};

export default Copy;
