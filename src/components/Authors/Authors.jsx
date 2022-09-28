import styled from "styled-components";

export const AuthorsStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  text-align: center;
  font-size: x-small;
  margin: 10px;
  opacity: 0.7;
  word-break: break-word;
  & a {
    color: yellow;
    font-weight: 700;
  }
`;

function Authors() {
  return (
    <AuthorsStyled>
      <div>
      Application development by&nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={'https://www.linkedin.com/in/viktor-berezhnyi/'}>
        Viktor Berezhniy
      </a>&nbsp;
      and &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={'https://www.linkedin.com/in/mikhail--butuzov'}>
        Mikhail Butuzov
      </a> &nbsp;
      (2022) 
      </div>
    </AuthorsStyled>
  );
}

export default Authors;
