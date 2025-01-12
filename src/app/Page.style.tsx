import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  color: white;

  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #fff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  .error-message {
    text-align: center;
    font-size: 20px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Wrapper = styled.div`
  padding: 5% 10%;
  background: linear-gradient(to right, #0d1f2d, #1a3043);
  color: #fff;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  gap: 30px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #f1f1f1;
  text-align: center;
  margin-bottom: 20px;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  color: #ff8c00;
  text-align: center;
  margin-bottom: 15px;
`;

export const RaceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  width: 100%;
`;

export const RaceCard = styled.div`
  background: #2c3e50;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

export const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Button = styled.button`
  background-color: #ff8c00;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e67e00;
  }
  
  &:disabled {
    background-color: #bdc3c7;
    cursor: not-allowed;
  }
`;

export const EventDetails = styled.div`
  background-color: #34495e;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 900px;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
`;

export const PositionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

export const PositionCard = styled.div`
  background: #1abc9c;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  
  &:nth-child(odd) {
    background: #16a085;
  }
`;

export const PositionHeader = styled.h4`
  color: #ecf0f1;
  font-size: 1.25rem;
`;

export const PositionText = styled.p`
  font-size: 1rem;
  margin: 5px 0;
`;