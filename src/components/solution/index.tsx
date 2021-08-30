import react, {FC} from 'react';

import {
  Container,
  Description,
  Illustration,
  MobileImage,
  SolutionWrapper,
  Title,
} from './solution.styles';
import { SolutionProps } from './solution.types';

const Solution: FC<SolutionProps> = ({
  id,
  title,
  description,
  mobileImage,
  illustrationImage,
}) => (
  <SolutionWrapper id={id}>
    <Container>
      <Title>
        <strong>{title}</strong>
      </Title>
      <Illustration src={illustrationImage} />
      <Description>{description}</Description>
      <MobileImage src={mobileImage} />
    </Container>
  </SolutionWrapper>
);

export default Solution;
