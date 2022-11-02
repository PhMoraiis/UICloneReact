/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTransform } from 'framer-motion';
import useWrapperScroll from '../Model/UseWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';


const UniqueOverlay: React.FC = () => {

  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">View Champions</a>
          </li>
          <li>
            <a href="#">Download Game</a>
          </li>
          <li>
            <a href="#">Summoners Rift</a>
          </li>
          <li>
            <a href="#">Patch Notes</a>
          </li>
          <li>
            <a href="#">More...</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
}

export default UniqueOverlay;