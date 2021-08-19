import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {AboutUsWrapper, LogoImage, ContentWrapper,Subtitle,Title,Description,Values} from './aboutUs.styles';

const AboutUs: FC = () => (
    <AboutUsWrapper> 
      <LogoImage src="./../images/logo.png" alt="background" loading="lazy"/>
      <ContentWrapper>
          <div>
            <Subtitle>Quem Somos?</Subtitle>
            <Title>Gas Location</Title>
            <Description>Somos uma startup angolana que visa criar uma plataforma que permita você saber em tempo real, a disponibilidade de diversos serviços conectados ao seu automóvel. Desde empresas distribuidoras de combustível à revendedores de gás, estações de serviço e muito mais!</Description>
          </div>
          <Values>
            <div>
              <img src="" alt=""/>
                <h4><strong>Missão</strong></h4>
                <p>Disponibilizar informação em tempo real</p>
            </div>
            <div>
              <img src="" alt=""/>
              <h4><strong>visão</strong></h4>
              <p>Alcançar o maior número de serviços de automóveis.</p>
              </div>
              <div>
                <img src="" alt=""/>
                  <h4><strong>Valores</strong></h4>
                  <p>Comprometimento, transparência e Vontade.</p>
              </div>
          </Values>
      </ContentWrapper>
    </AboutUsWrapper>
  );
  
  export default AboutUs;