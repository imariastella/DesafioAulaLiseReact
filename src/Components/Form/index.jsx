import styled from "styled-components";
import { Button } from "../Button";

const NotaAnime = () => {
  function darNota(Nota) {
    console.log(Nota);
  }
  return (
    <form onSubmit={darNota}>
      <Input type="number" placeholder="Sua Nota!" />
      <Button onClick={darNota} buttonPrimary="Avaliar" />
    </form>
  );
};

export { NotaAnime };

const Input = styled.input`
  font-size: 15px;
  outline: none;
  border: 1px solid #003296;
  border-radius: 10px;
  width: 25%;
  height: 30px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.1px;
  background-color: #6f59dd;
  ::placeholder {
    color: white;
    font-size: 12px;
    padding: 0.6em;
    font-weight: 500;
    font-family: inherit;
  }
`;
