import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarHead = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100vh;
`
export const LogoLink = styled(Link)`
  text-decoration: none;
`
export const LogoImage = styled.img`
  height: 50px;
  width: 50px;
`
export const AppContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: none;
  border: none;
  margin-right: 10px;
`
export const ProfileImage = styled.img`
  height: 25px;
  width: 25px;
`
export const LogoutButton = styled.button`
  border: 1px solid;
  padding: 10px;
  border-color: ${props => props.color};
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  margin-left: 5px;
`
export const ModelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 250px;
  background-color: #cbd5e1;
  border-radius: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    height: 200px;
    width: 400px;
  }
`
export const ModalDesc = styled.p`
  font-family: 'TimesNewRoman';
  font-size: 15px;
  margin: 10px;
  color: black;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid grey;
  padding: 5px;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  font-family: 'TimesNewRoman';
  @media screen (min-width: 786px) {
    padding: 5px;
    font-size: 30px;
    font-weight: bold;
    font-family: Serif;
  }
`
export const ConfirmButton = styled.button`
  background-color: blueViolet;
  border-radius: 5px;
  border: 1px solid grey;
  padding: 5px;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  font-family: 'TimesNewRoman';
  @media screen (min-width: 786px) {
    padding: 5px;
    font-size: 30px;
    font-weight: bold;
    font-family: Serif;
  }
`
export const LogoutIconButton = styled.button`
  height: 20px;
  width: 20px;
  border-radius: none;
  border: 1px solid;
`
