import styled from '@emotion/styled';

export const PartnersWrapper = styled.section`
  background-image: linear-gradient(#0c1d2f 40%, #053363);
  padding: 3rem 2rem 1.45rem;
  color: white;
`;

export const PartnersContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin: 0 auto;
  max-width: 960px;
  text-align: center;
`;
export const PartnersImagesContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
  min-width: 60%;
  & > img {
    object-fit: contain;
    margin-right: 5%;
  }
`;
