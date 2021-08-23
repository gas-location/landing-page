import react, {FC} from 'react';

import {
  Container,
  Description,
  Illustration,
  MobileImage,
  SolutionWrapper,
  Title,
} from './solution.style';
import { SolutionProps } from './solution.types';

const Solution: FC<SolutionProps> = ({
  title,
  description,
  mobileImage,
  illustrationImage,
}) => (
  <SolutionWrapper>
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
