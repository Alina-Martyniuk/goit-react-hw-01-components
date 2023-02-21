import styled from 'styled-components';

export const Wrapper = styled.section`
border-radius: 5px;
border: grey solid 2px;
font-size: 30px;
margin-bottom: 40px;
`;

export const List = styled.ul`
display: flex;
padding: 0;
justify-content: center;
list-style: none;
margin: 0;
`;

export const Item = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 150px;
padding: 10px;
`;

export const IsOnline = styled.span`
height: 20px;
width: 20px;
border-radius: 50%;
display: inline-block;
background-color: green;
margin-bottom: 20px;
`

export const IsOffline = styled.span`
height: 20px;
width: 20px;
border-radius: 50%;
display: inline-block;
background-color: red;
margin-bottom: 20px;
`