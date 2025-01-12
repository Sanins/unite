import styled from 'styled-components';

export const YearRangeWrapper = styled.div`
  background: #2c3e50;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.2);
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #ecf0f1;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 1rem;
  color: #34495e;
  border: 1px solid #7f8c8d;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #ff8c00;
    box-shadow: 0px 0px 5px rgba(255, 140, 0, 0.5);
  }
`;