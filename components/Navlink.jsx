import { useEffect, useState } from "react";

const NavLink = ({ href, text, id }) => {
  const [active, setActive] = useState(false);

  function isElementInViewport (el) {
    if (el === null) {
      return;
    }

    var rect = el.getBoundingClientRect();

    var lower_range = window.innerHeight / 3;
    var upper_range = window.innerHeight * 2 / 3;

    return (
        (rect.top >= lower_range && rect.top <= upper_range) ||
        (rect.top <= lower_range && rect.bottom >= upper_range)
    );
}

  function DetectElement() {
    var element = document.getElementById(id);
    var is_visible = isElementInViewport(element);

    if (is_visible) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", DetectElement);

    return () => {
      window.removeEventListener("scroll", DetectElement);
    };
  });

  function GoToElement(id) {
    var element = document.getElementById(id);
    var headerOffset = window.innerHeight / 2.75;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scroll({ top: offsetPosition, behavior: "smooth" });
  }

  return (
    <button
      onClick={() => GoToElement(id)}
      className={`w-max h-max ${active ? "text-portfolio-light" : ""}  group`}
    >
      {text}
      <div
        className={`${active ? "w-full " : "w-0"
          } h-[2px] bg-portfolio-light group-hover:w-full transition-all`}
      />
    </button>
  );
};

export default NavLink;
