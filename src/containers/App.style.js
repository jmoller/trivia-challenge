import styled from 'styled-components';

const AppHolder = styled.div`

  display: flex;
  flex-direction: column;
  background: ${props => props.backgroundColor};
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
  height: 100vh;
  font-size: 1.5rem;
  max-width: 35.7rem;
  padding: 3rem;
  p {
    text-align: center;
  }
`;

AppHolder.displayName = 'AppHolder';

export default AppHolder;