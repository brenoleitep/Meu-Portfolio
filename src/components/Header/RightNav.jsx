import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0d2538;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 20;

    display: flex;
    align-items: center;
    gap: 40px;
    justify-content: center;

    li {
      color: #fff;
      padding: 18px 10px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>01. Sobre mim</li>
      <li>02. Skills</li>
      <li>03. Projetos</li>
      <li>04. Contato</li>

      <button>Resumo</button>
    </Ul>
  );
};

export default RightNav;
