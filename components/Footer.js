import Socials from './Socials';

import { Flex } from '../styles/Flex.styled';
import { StyledFooter, ImageFooter, Form } from '../styles/Footer.styled';
import { Button } from '../styles/Button.styled';

const Footer = () => {
  return (
    <>
      <ImageFooter width={1000} height='2rem' src='/images/bg-footer-top-desktop.svg' />
      <StyledFooter>
        <Flex>
          <img src='/images/icon-white.svg' alt='white logo' />
          <h2>Huddle</h2>
        </Flex>
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </li>
            <li>
              <img src='/images/icon-phone.svg' alt='phone' />
              Phone +1-543-123-4567
            </li>
            <li>
              <img src='/images/icon-email.svg' alt='email icon' />
              example@huddle.com
            </li>
            <li>
              <Socials />
            </li>
          </ul>

          <ul>
            <li>NEWSLETTER</li>
            <li>
              To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your
              email address
            </li>

            <Form>
              <input type='text' placeholder='john@mail.com' />
              <Button bg='hsl(322, 100%, 66%)' color='#fff' border='transparent'>
                Subscribe
              </Button>
              <li>Check your email please</li>
            </Form>
          </ul>
        </Flex>
        <p>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href='https://github.com/RedSquirrrel' target='_blanck'>
            @RedSquirrel
          </a>
        </p>
      </StyledFooter>
    </>
  );
};

export default Footer;
