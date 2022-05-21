import React from "react";

function Copyright({ children }) {
  return (
    <>
      <div className="footer__copyright copyright">
        <span className="copyright__text">{children}</span>
      </div>
    </>
  );
}

export default Copyright;
