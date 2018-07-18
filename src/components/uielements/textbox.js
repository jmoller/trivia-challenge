import styled, {css} from 'styled-components';

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 30rem;
    width: 100%;
    border-radius: 1rem;
    background: #FFD749;
    border: .3rem solid #FFFCEA;
    box-shadow: 0rem 1rem 0px 0px rgba(0,0,0,.4);
    p {
      font-size: 3.5rem;
      color: #4B3A4F;
      font-family: 'Var';
    }
`;

TextBox.displayName = 'TextBox';

export default TextBox;