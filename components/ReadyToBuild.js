import { Button } from '../styles/Button.styled';
import { StyledReady } from '../styles/Ready.styled';

const ReadyToBuild = () => {
  return (
    <StyledReady>
      <h1>Ready To Build Your Community?</h1>
      <Button bg='hsl(322, 100%, 66%)' color='#fff' border='transparent'>
        Get Started For Free
      </Button>
    </StyledReady>
  );
};

export default ReadyToBuild;
