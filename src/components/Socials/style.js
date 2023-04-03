import styled from "styled-components";

export const StyledLine = styled.div`
  border-left: 1px solid #ccd6f6;
  opacity: 70%;
  height: 100px;

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const StyledIcons = styled.div`
  position: fixed;
  left: 10px;
  bottom: 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  svg {
    height: 25px;
    width: 25px;

    :hover {
      color: #64ffda;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }

  @media (max-width: 760px) {
    display: none;
  }
`;
