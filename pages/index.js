import { ThemeProvider } from 'styled-components';

import { CardContainer } from '../styles/Card.styled';
import GlobalStyles from '../styles/Globals';

import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';
import content from '../content';
import Communities from '../components/Communities';
import ReadyToBuild from '../components/ReadyToBuild';

const theme = {
  colors: {
    header: 'hsl(207, 100%, 98%)',
    body: '#fff',
    footer: 'hsl(192, 100%, 9%)',
  },
  mobile: '768px',
};

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Communities />
        <CardContainer>
          {content.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </CardContainer>
        <ReadyToBuild />
        <Footer />
      </>
    </ThemeProvider>
  );
}

