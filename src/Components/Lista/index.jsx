import styled from "styled-components";
import { Item } from "../Itens";
import { Texto } from "../Texto";
import { Button } from "../Button";

const List = () => {
  function Comentario(Coment) {
    console.log(Coment);
  }
  return (
    <div>
      <Text>
        <Texto textPrimary="Top 10 melhores animes de todos os tempos!" />
      </Text>
      <Text>
        <Texto textSecond="Avalie seus animes favoritos!" />
      </Text>
      <Lista>
        <Item Ranking="10º" Anime="Bleach" Ano="2004 - 2013" />
        <Item Ranking="9º" Anime="Neon Genesis Evangelion" Ano="1995 - 1996" />
        <Item Ranking="8º" Anime="Naruto" Ano="2002 - Atualmente" />
        <Item Ranking="7º" Anime="Fullmetal Alchemist" Ano="2003 - 2004" />
        <Item Ranking="6º" Anime="Code Geass" Ano="2006 - 2007" />
        <Item Ranking="5º" Anime="Os Cavaleiros do Zodíaco" Ano="1986 - 1989" />
        <Item Ranking="4º" Anime="Pokémon" Ano="1997 - Atualmente" />
        <Item Ranking="3º" Anime="One Piece" Ano="1999 - Atualmente" />
        <Item Ranking="2º" Anime="Death Note" Ano="2006 - 2007" />
        <Item Ranking="1º" Anime="Dragon Ball Z" Ano="1989 - 1996" />
      </Lista>
      <Text>
        <Texto textSecond="Deixe seu comentário!" />
      </Text>
      <form onSubmit={Comentario}>
        <Input type="text" placeholder="Seu comentário!" />
        <Button onclick={Comentario} buttonSecond="Comente" />
      </form>
    </div>
  );
};

export { List };

const Text = styled.h1`
  color: #210b5a;
`;
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
const Lista = styled.h2`
  color: #312356;
  font-size: 35px;
  line-height: 1.5;
`;
