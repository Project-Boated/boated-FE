import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;

  top: 200px;
  left: 200px;

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

  top: 80px;
  left: 375px;

  width: 518px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled.div`
  width: 146px;
  height: 146px;

  background: ${({ theme }) => theme.S_0};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
`;

export const SettingIconWrapper = styled.div`
  position: relative;

  top: -30px;
  left: 50px;

  cursor: pointer;
`;

export const ProfileImageText = styled.div`
  margin-top: 24px;

  font-weight: 400;
  font-size: 14px;

  color: ${({ theme }) => theme.M_1};
`;

export const NicknameInputWrapper = styled.div`
  margin: 56px 35px 0 0;
  display: flex;
  align-items: center;
`;
export const NicknameTitle = styled.span`
  font-weight: 400;
  font-size: 14px;

  margin-right: 33px;
  color: ${({ theme }) => theme.M_1};
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

export const NicknameWarningText = styled.div`
  margin: 8px 240px 0 0;

  font-weight: 400;
  font-size: 10px;

  color: ${({ theme }) => theme.W_1};
`;

export const SubmitButton = styled.button`
  width: 200px;
  height: 52px;

  margin-top: 79px;

  background-color: ${({ theme }) => theme.M_1};
  color: ${({ theme }) => theme.S_0};
  border: none;
  border-radius: 6px;

  font-weight: 400;
  font-size: 13px;
`;

export const DeleteAccount = styled.div`
  position: absolute;
  top: 536px;
  left: 43px;

  font-weight: 400;
  font-size: 10px;

  color: ${({ theme }) => theme.S_4};

  cursor: pointer;
`;