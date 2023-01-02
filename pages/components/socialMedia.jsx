import React from "react";

function SocialMedia({ Component, link }) {
  return (
    <a
      style={{ transition: " 0.2s ease-in-out" }}
      className="rounded-full border-[1px] p-3 border-[#fff] text-[#fff] hover:text-[rgb(97,132,214)] hover:border-[rgb(97,132,214)]"
      href={link}
    >
      <Component />
    </a>
  );
}

export default SocialMedia;
