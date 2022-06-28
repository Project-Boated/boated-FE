import styled from 'styled-components';

import Theme from '@/styles/Theme';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background-color: ${Theme.S_0};

  z-index: 999;

  position: fixed;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 52px;

  box-sizing: border-box;
  padding: 0 46px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconAnchor = styled.a`
  display: flex;
  align-items: center;

  margin-right: 116px;
  gap: 10px;

  cursor: pointer;
`;

export const Tab = styled.div`
  width: 184px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;

  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 50%;
`;
