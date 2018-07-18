import styled from "styled-components";

const ResultsHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;

  ul.results__list {
    list-style: none;
    max-height: 60%;
    overflow: scroll;
    li {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    
    li:before {
      content: "";
      background-size: 3rem 3rem;
      display: inline-block;
      width: 3rem;
      height: 3rem;
      vertical-align: bottom;
      margin-right: 1rem;
    }

    li.correct:before {
      background-image: url(./assets/img/icons/correctIcon.png);
    }
    li.wrong:before {
      background-image: url(./assets/img/icons/wrongIcon.png);
    }
  }
`;

export default ResultsHolder;
