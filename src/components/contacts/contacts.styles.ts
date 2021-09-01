import styled from '@emotion/styled';

export const ContactsWrapper = styled.section`
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ContactsSide = styled.aside`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

export const ImageWrapper = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
`;

export const Image = styled.img`
  width: 100%;
  min-width: 100%;
  min-height: 100%;
`;

export const ContactsContainer = styled.div`
  background-color: #3e3e3e55;
`;

export const ContactsInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;
export const ContactsInfoText = styled.span`
  color: #ffffff;
  font-weight: 200;
  font-size: 1.2rem;
  padding-left: 1rem;
`;

export const ContactsContent = styled.div`
  width: 100%;
  padding: 3rem;
  padding-left: 1rem;
  margin-left: auto;
  color: #ffffff;
  max-width: calc(960px / 2);
`;

export const ContactsForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 3rem;
  margin-right: auto;
  padding-right: 1rem;
  flex-direction: column;
  align-items: flex-start;
  max-width: calc(960px / 2);
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  margin-right: 2rem;
`;
