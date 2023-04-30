import { PropTypes } from "prop-types";
import styled from "styled-components";
import { NotaAnime } from "../Form";

const Item = ({ Anime, Ranking, Ano }) => {
  Item.propTypes = {
    Anime: PropTypes.string,
    Ranking: PropTypes.string,
    Ano: PropTypes.string,
  };

  return (
    <div>
      <Fonte>
        {Ranking} - {Anime} - {Ano} <NotaAnime />
      </Fonte>
    </div>
  );
};

export { Item };

const Fonte = styled.li`
  font-size: 20px;
`;
