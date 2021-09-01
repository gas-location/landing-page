import React, { FC } from 'react';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarker,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';

import { Description, H2 } from '../shared';
import {
  ContactsContainer,
  ContactsContent,
  ContactsForm,
  ContactsInfo,
  ContactsInfoText,
  ContactsSide,
  ContactsWrapper,
  Image,
  ImageWrapper,
  SocialLink,
} from './contacts.styles';
import { ContactsProps, SocialIconProps } from './contacts.types';

const SocialIcon: FC<SocialIconProps> = ({ social, size }) => {
  if (social === 'instagram') return <FaInstagram size={size} />;
  if (social === 'facebook') return <FaFacebook size={size} />;
  if (social === 'twitter') return <FaTwitter size={size} />;
  return null;
};

const Contacts: FC<ContactsProps> = ({
  id,
  title,
  email,
  image,
  phone,
  address,
  description,
  socialMedias,
}) => (
  <ContactsWrapper id={id}>
    <ContactsSide>
      <ImageWrapper>
        <Image src={image} alt="background" loading="lazy" />
      </ImageWrapper>
      <ContactsContainer>
        <ContactsContent>
          <H2>{title}</H2>
          <Description>{description}</Description>
          <ContactsInfo>
            <FaMapMarker size="1.5rem" />
            <ContactsInfoText>{address}</ContactsInfoText>
          </ContactsInfo>
          <ContactsInfo>
            <FaPhone size="1.5rem" />
            <ContactsInfoText>{phone}</ContactsInfoText>
          </ContactsInfo>
          <ContactsInfo>
            <FaEnvelope size="1.5rem" />
            <ContactsInfoText>{email}</ContactsInfoText>
          </ContactsInfo>
          <div>
            {socialMedias.map(({ key, link }) => (
              <SocialLink
                key={link}
                href={link}
                target="__blank"
                aria-label={key}
              >
                <SocialIcon social={key} size="2rem" />
              </SocialLink>
            ))}
          </div>
        </ContactsContent>
      </ContactsContainer>
    </ContactsSide>
    <ContactsForm>
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="Email" />
      <textarea placeholder="Mensagem..." rows={7} />
      <input type="button" value="Enviar mensagem" />
    </ContactsForm>
  </ContactsWrapper>
);

export default Contacts;
