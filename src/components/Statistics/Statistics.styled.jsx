import styled from 'styled-components';

export const StatsWrapper = styled.section`
border-radius: 5px;
border: grey solid 2px;
font-size: 30px;
padding: 20px;
margin-bottom: 40px;
`;

export const List = styled.ul`
display: flex;
padding: 0;
justify-content: center;
list-style: none;
margin: 0;
border-radius: 5px;
border: grey solid 2px;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 150px;
background-color: ${getRandomHexColor};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}