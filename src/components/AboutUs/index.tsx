import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {Container} from './aboutUs.styles';

const AboutUs: FC = () => (
    <Container> 
      <StaticImage
      src="../images/logo.png"
    
      quality={95}
      alt="A Gatsby astronaut"
      
    />
    </Container>
  );
  
  export default AboutUs;