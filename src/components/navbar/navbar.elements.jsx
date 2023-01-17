import styled from 'styled-components';
import {HashLink as Link} from 'react-router-hash-link';

export const Container = styled.div`
  position: fixed;
  background: linear-gradient(0deg, rgba(65, 72, 233,0.804359243697479) 0%, rgba(65, 72, 233,1) 100%);
  width: 100%;
  height: 45px;
`;
export const Wrapper = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;
export const MainMenu = styled.ul`
  height: 100%;
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-between;

`;
export const MenuItems = styled.li`
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemLink = styled(Link)`
  display: flex;
  width: 140px;
  justify-content: center;
  align-items:center;
  text-decoration: none;
  text-aling: center;
  font-size: 16.5px;
  height: 100%;
  color: #fff;
  padding: 0.3rem 1.2rem;
  margin: 0px 5px;
  transition: all 0.5s ease;

  &:hover{
    background-color: rgb(2, 13, 98);
    border-radius: 15px;
  }

  svg{
    margin-right: 5px;
    font-size: 17.2px;
  }
`;
export const MobileIcon = styled.div`
  display: none;
`;
