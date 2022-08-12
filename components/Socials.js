import { StyledSocials } from '../styles/Footer.styled';

const Socials = () => {
  return (
    <StyledSocials>
      <a href='https://en-gb.facebook.com/' target='_blank' rel='noreferrer noopener'>
        <picture>
          <img src='/images/Facebook.png' alt='facebook' />
        </picture>
      </a>
      <a href='https://www.instagram.com/' target='_blank' rel='noreferrer noopener'>
        <picture>
          <img src='/images/Instagram.png' alt='instagram' />
        </picture>
      </a>
      <a href='https://twitter.com/' target='_blank' rel='noreferrer noopener'>
        <picture>
          <img src='/images/Twitter.png' alt='twitter' />
        </picture>
      </a>
    </StyledSocials>
  );
};

export default Socials;
