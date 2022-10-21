import React from "react";

function SocialMedia({ Component }) {
  return (
    <div
      style={{ transition: " 0.2s ease-in-out" }}
      className="rounded-full border-[1px] p-3 border-[#fff] text-[#fff] hover:text-[rgb(97,132,214)] hover:border-[rgb(97,132,214)]"
    >
      <Component />
    </div>
  );
}

export default SocialMedia;
