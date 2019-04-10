import * as React from 'react';
import styled from '@emotion/styled';


const StyledContainer = styled.div``;

interface ContainerProps {
  className?: string;
}

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;
