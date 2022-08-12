import { StyledHeader, Nav, Logo, Image } from '../styles/Header.styles';

import { Button } from '../styles/Button.styled';
import { Container } from '../styles/Container.styled';
import { HeaderText } from '../styles/HeaderText.styled';

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src='/images/logo.svg' alt='logo' />
        <Button border='hsl(321, 100%, 78%)' color='hsl(321, 100%, 78%)'>
          Try It Free
        </Button>
      </Nav>
      <Container>
        <HeaderText>
          <h1> Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users
            as you engage in genuine discussion.
          </p>
          <Button bg='hsl(322, 100%, 66%)' color='#fff' border='transparent'>
            Get Started For Free
          </Button>
        </HeaderText>

        <Image src='/images/screen-mockups.svg' alt='mockups' />
      </Container>
    </StyledHeader>
  );
};

export default Header;
