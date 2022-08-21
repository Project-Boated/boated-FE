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
  position: relative;

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

export const TabContainer = styled.ul`
  display: flex;
`;

export const Tab = styled.li`
  position: relative;

  width: 184px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 13px;
  font-weight: 400;
  line-height: 18px;

  cursor: pointer;
`;

export const ProfileWrapper = styled.div`
  position: relative;

  & > div:first-child {
    top: 30px;
    right: 8px;
  }

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

export const TriangleIconWrapper = styled.div`
  position: absolute;

  top: 25px;
`;
