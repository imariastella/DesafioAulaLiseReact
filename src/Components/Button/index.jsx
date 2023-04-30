import styled from "styled-components";
import { PropTypes } from "prop-types";

const Button = ({ buttonPrimary, buttonSecond }) => {
  Button.propTypes = {
    buttonPrimary: PropTypes.string,
    buttonSecond: PropTypes.string,
  };

  return (
    <Botao>
      <button>
        {buttonPrimary} {buttonSecond}
      </button>
    </Botao>
  );
};

export { Button };

const Botao = styled.div`
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 15px;
    font-weight: 500;
    gap: 10px;
    font-family: inherit;
    background-color: #3b29c3;
    cursor: pointer;
    transition: border-color 0.25s;
  }
`;
