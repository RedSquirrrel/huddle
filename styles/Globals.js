import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
}

html{
  height: 100%;

}

body {
  padding: 0;
  margin: 0;
  background: ${({ theme }) => theme.colors.body};  
  color:  hsl(192, 100%, 9%);
  font-size: 1.15em;
  font-family: 'Poppins', sans-serif;
}

p{
  opacity: 0.6;
  line-height: 1.5;
}
img{
  max-width: 100%;
}

a{
  text-decoration: none;

}
`;

export default GlobalStyles;

