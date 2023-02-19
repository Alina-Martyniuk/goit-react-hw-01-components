import styled from 'styled-components';

export const ProfileWrapper = styled.div`
border-radius: 5px;
border: grey solid 2px;
font-size: 30px;
padding: 20px;
`;

export const Descr = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Image = styled.img`
display: block;
width: 100px;
`;

export const StatsList = styled.ul`
display: flex;
padding: 0;
justify-content: center;
list-style: none;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
width: 150px;
`;