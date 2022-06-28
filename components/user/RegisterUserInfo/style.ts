import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;

  width: 1003px;
  height: 582px;

  background: ${({ theme }) => theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 51px;
`;

export const SeaIconWrapper = styled.div`
  position: absolute;

  top: -4px;
  left: -4px;
`;

export const ProfileChangeWrapper = styled.div`
  position: relative;

  top: 98px;
  left: 375px;

  width: 518px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 70px;
`;
