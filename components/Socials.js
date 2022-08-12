import { StyledSocials } from '../styles/Footer.styled';

const Socials = () => {
  return (
    <StyledSocials>
      <a href='https://en-gb.facebook.com/' target='_blanck'>
        <img src='/images/Facebook.png' alt='facebook' />
      </a>
      <a href='https://www.instagram.com/' target='_blanck'>
        <img src='/images/Instagram.png' alt='instagram' />
      </a>
      <a href='https://twitter.com/' target='_blanck'>
        <img src='/images/Twitter.png' alt='twitter' />
      </a>
    </StyledSocials>
  );
};

export default Socials;
