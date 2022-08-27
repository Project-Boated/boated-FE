import React from 'react';
import styled from 'styled-components';

import Text from '@/components/atoms/Text';

import Theme from './Theme';

export default {
  component: Theme,
  title: 'styles/Theme',
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 100px;
  place-content: center;

  margin: 0 auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :first-child {
    margin-bottom: 10px;
  }
`;

const Wrapper = styled.div<{ backgroundColor: string }>`
  width: 100px;
  height: 100px;

  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

type ThemeOption = keyof typeof Theme;

const Template = () => {
  const themeList: ThemeOption[] = Object.keys(Theme) as ThemeOption[];

  return (
    <GridContainer>
      {themeList.map((theme: ThemeOption) => (
        <Container>
          <Wrapper backgroundColor={Theme[theme]} />
          <Text fontSize={15} fontWeight={700}>
            {theme}
          </Text>
          <Text fontSize={13} fontWeight={500}>
            ({Theme[theme]})
          </Text>
        </Container>
      ))}
    </GridContainer>
  );
};

export const Default = Template.bind({});
