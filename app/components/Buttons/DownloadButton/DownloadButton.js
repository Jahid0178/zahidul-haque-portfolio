import React from "react";

const DownloadButton = ({ children, href }) => {
  return (
    <a href={href} className="btn-primary" download>
      {children}
    </a>
  );
};

export default DownloadButton;
