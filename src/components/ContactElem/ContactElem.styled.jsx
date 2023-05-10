import styled from '@emotion/styled';

export const ContactElemStyle = styled.li`
  background-color: var(--color-secondary);
  border-radius: 10px;
  margin-top: 5px;
  padding: 10px;
`;

export const ContactName = styled.h3`
  font-size: 23px;
  margin-bottom: 5px;
`;

export const ContactNumber = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: grey;
  margin-bottom: 5px;
`;

export const DeleteBtn = styled.button`
  appearance: none;
  background-color: #a62f31;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  padding: 5px 10px;
  text-align: center;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  will-change: transform;

  :hover {
    box-shadow: rgba(243, 70, 72, 0.25) 0 8px 15px;
    background-color: var(--color-alert);
    transform: translateY(-2px);
  }

  :active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
