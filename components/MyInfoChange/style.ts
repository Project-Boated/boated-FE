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

export const ProfileImage = styled.img`
  box-sizing: border-box;
  width: 146px;
  height: 146px;

  background: ${({ theme }) => theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
`;

export const SettingIconLabel = styled.label`
  position: relative;

  top: -30px;
  left: 50px;

  cursor: pointer;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const NicknameInputWrapper = styled.div`
  margin: 56px 35px 0 0;
  display: flex;
  align-items: center;
`;
export const NicknameTitleWrapper = styled.div`
  margin-right: 33px;
`;

export const NicknameInput = styled.input`
  width: 380px;
  height: 40px;

  background: ${({ theme }) => theme.S_0};
  border: ${({ theme }) => theme.S_4};
  color: ${({ theme }) => theme.S_4};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;

  font-weight: 400;
  font-size: 14px;

  padding: 0 13px;

  &:focus {
    outline: none;
  }
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  right: 15px;
`;

export const NicknameWarningTextWrapper = styled.div<{ isDuplicated: boolean }>`
  visibility: ${(props) => (props.isDuplicated ? 'visible' : 'hidden')};

  margin: 8px 220px 0 0;
`;

export const ButtonWrapper = styled.div`
  margin-top: 70px;
`;
