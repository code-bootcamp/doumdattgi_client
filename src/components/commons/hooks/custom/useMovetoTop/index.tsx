import styled from "@emotion/styled";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const Top = styled.div`
  position: fixed;
  right: 3%;
  bottom: 5%;
  z-index: 1;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 0.94rem;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 0 1px #dadcdf, 0 4px 8px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover {
    transition: all 0.2s linear;
    background-color: #f5f7f8;
  }
`;

export default function TopButton(): JSX.Element {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth"
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <>
      {showButton && (
        <Top onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAnglesUp} style={{ color: "#7e8186" }} />
        </Top>
      )}
    </>
  );
}
