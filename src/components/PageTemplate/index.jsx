import React, { useState, useEffect, useRef } from "react";
import MenuButton from "../MenuButton";
import "./styles.css";
import Background from "../../components/Background";
import styled from "styled-components";
import CartDropdown from "../CartDropdown";

const Lady = styled.img`
  position: absolute;
  height: 38rem;
  bottom: 0;
  right: 22%;

  // animation: fadeIn ease 5s;

  // @keyframes fadeIn {
  //   0% {
  //     opacity: 1;
  //   }
  //   100% {
  //     opacity: 0;
  //   }
  // }
`;

const Page = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const scrollContainerRef = useRef(null);

  const scrollToSection = (index) => {
    setActiveSection(index);
    const targetSection = scrollContainerRef.current.children[index];
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = scrollContainerRef.current.scrollTop;
      setOffsetY(scrollTop);
      const newActiveSection = Math.floor(scrollTop / window.innerHeight);
      setActiveSection(newActiveSection);
    };

    scrollContainerRef.current.addEventListener("scroll", handleScroll);
    return () => {
      if (scrollContainerRef.current !== null)
        scrollContainerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="pageContainer" style={{ overflow: "hidden" }}>
      <div className="sideIcons">
        <CartDropdown />

        <svg
          className="arrows"
          width="103"
          height="193"
          viewBox="0 0 103 193"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M45.603 102.087L45.6027 102.087L1.64029 58.4273C0.833493 57.6261 0.534497 56.9576 0.50289 56.3828C0.471082 55.8044 0.703841 55.2147 1.18708 54.5584C1.67226 53.8995 2.37067 53.2255 3.1889 52.4842C3.39142 52.3008 3.60121 52.1133 3.81563 51.9216C4.45436 51.3507 5.13415 50.7431 5.7851 50.0966C6.45829 49.428 7.05832 48.76 7.6008 48.1561C7.75992 47.979 7.91409 47.8073 8.0637 47.6428C8.73583 46.9037 9.30664 46.3192 9.85846 45.9432C10.3961 45.5769 10.8722 45.4381 11.3745 45.5254C11.8989 45.6164 12.5425 45.9688 13.3687 46.7894L51.1131 84.2889L51.4655 84.6389L51.8178 84.289L89.5705 46.7962C90.3917 45.9807 91.0557 45.6248 91.614 45.5317C92.157 45.4411 92.6813 45.586 93.2621 45.9554C93.8546 46.3322 94.4669 46.9178 95.1671 47.6524C95.3947 47.8913 95.6322 48.1466 95.8797 48.4127C96.3767 48.9469 96.9137 49.5241 97.4902 50.0966C98.0562 50.6587 98.6401 51.1962 99.1919 51.7042C99.4814 51.9707 99.762 52.2291 100.027 52.4785C100.811 53.2182 101.466 53.8904 101.909 54.5453C102.348 55.1952 102.547 55.7836 102.49 56.3675C102.433 56.9532 102.109 57.6298 101.299 58.4342L57.3366 102.094C55.7179 103.701 53.5937 104.5 51.4655 104.5C49.3418 104.5 47.2196 103.695 45.603 102.087Z"
            stroke="#E2E2E2"
          />
          <path
            d="M51.4655 60C49.2157 60 46.9649 59.1473 45.2503 57.4418L1.28796 13.7821C-2.1466 10.3712 1.99821 8.15273 5.43277 4.74182C8.86734 1.3309 10.2865 -1.9763 13.7211 1.43462L51.4655 38.9342L89.2182 1.44144C92.6527 -1.96948 94.408 1.33091 97.8425 4.74182C101.277 8.15274 105.086 10.378 101.651 13.7889L57.6889 57.4486C55.9717 59.1541 53.7186 60 51.4655 60Z"
            fill="#EB21BE"
          />
          <path
            d="M51.4655 148C49.2157 148 46.9649 147.147 45.2503 145.442L1.28796 101.782C-2.1466 98.3712 1.99821 96.1527 5.43277 92.7418C8.86734 89.3309 10.2865 86.0237 13.7211 89.4346L51.4655 126.934L89.2182 89.4414C92.6527 86.0305 94.408 89.3309 97.8425 92.7418C101.277 96.1527 105.086 98.378 101.651 101.789L57.6889 145.449C55.9717 147.154 53.7186 148 51.4655 148Z"
            fill="#EB21BE"
          />
          <path
            d="M45.603 190.087L45.6027 190.087L1.64029 146.427C0.833493 145.626 0.534497 144.958 0.50289 144.383C0.471082 143.804 0.703841 143.215 1.18708 142.558C1.67226 141.899 2.37067 141.225 3.1889 140.484C3.39142 140.301 3.60121 140.113 3.81563 139.922C4.45436 139.351 5.13415 138.743 5.7851 138.097C6.45829 137.428 7.05832 136.76 7.6008 136.156C7.75992 135.979 7.91409 135.807 8.0637 135.643C8.73583 134.904 9.30664 134.319 9.85846 133.943C10.3961 133.577 10.8722 133.438 11.3745 133.525C11.8989 133.616 12.5425 133.969 13.3687 134.789L51.1131 172.289L51.4655 172.639L51.8178 172.289L89.5705 134.796C90.3917 133.981 91.0557 133.625 91.614 133.532C92.157 133.441 92.6813 133.586 93.2621 133.955C93.8546 134.332 94.4669 134.918 95.1671 135.652C95.3947 135.891 95.6322 136.147 95.8797 136.413C96.3767 136.947 96.9137 137.524 97.4902 138.097C98.0562 138.659 98.6401 139.196 99.1919 139.704C99.4814 139.971 99.762 140.229 100.027 140.479C100.811 141.218 101.466 141.89 101.909 142.545C102.348 143.195 102.547 143.784 102.49 144.368C102.433 144.953 102.109 145.63 101.299 146.434L57.3366 190.094C55.7179 191.701 53.5937 192.5 51.4655 192.5C49.3418 192.5 47.2196 191.695 45.603 190.087Z"
            stroke="#E2E2E2"
          />
        </svg>
      </div>

      <div
        ref={scrollContainerRef}
        style={{
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              marginRight: "15rem",
            }}
          >
            {section}
          </div>
        ))}
      </div>
      <nav>
        {sections.slice(0, 4).map((section, index) => (
          <MenuButton
            order={index + 1}
            key={index}
            onClick={() => scrollToSection(index)}
            active={activeSection === index}
            text={
              section.props.name ? section.props.name : "Section " + (index + 1)
            }
          />
        ))}
      </nav>
      <Background />
      <Lady
        src="/img/introLady.png"
        style={{
          transform:
            offsetY < 254
              ? `translateX(${offsetY * 0.8}px)`
              : `translateX(255*0.8px)`,
          opacity: offsetY < 500 ? 1 : 0,
        }}
      />
    </div>
  );
};

export default Page;
