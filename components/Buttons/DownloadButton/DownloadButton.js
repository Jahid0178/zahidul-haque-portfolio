import React from "react";

const DownloadButton = ({ children, href }) => {
  return (
    <a href={href} className="btn-primary shadow-[-4px_4px_0_0_#000]" download>
      {children}
    </a>
  );
};

export default DownloadButton;
