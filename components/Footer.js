import Socials from './Socials';

import { Flex } from '../styles/Flex.styled';
import { StyledFooter, ImageFooter, Form } from '../styles/Footer.styled';
import { Button } from '../styles/Button.styled';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubscribe = e => {
    e.preventDefault();
    if (!email) {
      setMessage('Enter a valid email, please');
      setTimeout(() => {
        setMessage(null);
      }, 2000);
    } else {
      setMessage('Check your email please');
      setTimeout(() => {
        setMessage("Don't worry, It's not real :)");
        setTimeout(() => {
          setMessage(null);
        }, 2000);
      }, 2000);
    }
    setSubscribe(true);
    setEmail('');
  };

  return (
    <>
      <ImageFooter width={1000} height='2rem' src='/images/bg-footer-top-desktop.svg' />
      <StyledFooter>
        <Flex>
          <picture>
            <img src='/images/icon-white.svg' alt='white logo' />
          </picture>
          <h2>Huddle</h2>
        </Flex>
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
            </li>
            <li>
              <picture>
                <img src='/images/icon-phone.svg' alt='phone' />
              </picture>
              Phone +1-543-123-4567
            </li>
            <li>
              <picture>
                <img src='/images/icon-email.svg' alt='email icon' />
              </picture>
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

            <Form onSubmit={handleSubscribe} isValid={!subscribe}>
              <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='john@mail.com' />
              <Button bg='hsl(322, 100%, 66%)' color='#fff' border='transparent'>
                Subscribe
              </Button>
              {subscribe && <li>{message}</li>}
            </Form>
          </ul>
        </Flex>
        <p>
          Challenge by{' '}
          <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
            Frontend Mentor
          </a>
          . Coded by{' '}
          <a href='https://github.com/RedSquirrrel' target='_blank' rel='noreferrer'>
            @RedSquirrel
          </a>
        </p>
      </StyledFooter>
    </>
  );
};

export default Footer;
