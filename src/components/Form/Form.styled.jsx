import styled from '@emotion/styled';

export const InputContainer = styled.form`
  margin: 15px auto;
`;

export const Label = styled.label`
  display: block;
  margin: 0 7px 17px 7px;
  font-size: 23px;
  font-weight: 700;
  color: var(--color-accent);
`;

export const InputStyle = styled.input`
  width: 97%;
  margin: 7px auto;
  padding: 7px 10px;
  border-radius: 5px;
  border: none;
  border-bottom: 2px solid var(--color-accent);
  outline: none;
  display: block;
  font-size: 18px;
  color: white;
  background-color: var(--color-secondary);

  :hover,
  :focus,
  :active {
    outline: 2px solid var(--color-accent);
  }
`;

export const Button = styled.button`
  width: 85%;
  margin: 10px 7.5% 0 7.5%;
  appearance: none;
  background-color: var(--color-accent);
  border: none;
  border-radius: 15px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  padding: 15px 24px;
  text-align: center;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  will-change: transform;

  :hover {
    box-shadow: rgba(0, 207, 177, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  :active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
