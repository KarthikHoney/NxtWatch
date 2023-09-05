import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {BsMoon, BsBrightnessHighFill} from 'react-icons/bs'
import {BiLogOut} from 'react-icons/bi'

import {
  NavbarHead,
  LogoLink,
  LogoImage,
  AppContainer,
  ThemeButton,
  ProfileImage,
  LogoutButton,
  LogoutIconButton,
  ModalDesc,
  CloseButton,
  ModelContainer,
  ConfirmButton,
} from './styledComponents'

import ThemeAndVideo from '../../context/ThemeAndVideoContext'

const Header = props => (
  <ThemeAndVideo.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const color = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'

      const onChangeTheme = () => {
        toggleTheme()
      }

      const onClickingLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      return (
        <NavbarHead bgColor={bgColor}>
          <LogoLink to="/">
            <LogoImage
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website-logo"
            />
          </LogoLink>
          <AppContainer>
            <ThemeButton
              type="button"
              data-testid="theme"
              onClick={onChangeTheme}
            >
              {isDarkTheme ? (
                <BsBrightnessHighFill color={color} size={25} />
              ) : (
                <BsMoon size={25} />
              )}
            </ThemeButton>
            <ProfileImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              model
              trigger={
                <LogoutButton
                  type="button"
                  data-testid="theme"
                  onClick={onChangeTheme}
                >
                  Logout
                </LogoutButton>
              }
            >
              {close => (
                <ModelContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <CloseButton
                    type="button"
                    data-testid="theme"
                    onClick={() => close()}
                  >
                    Cancel
                  </CloseButton>
                  <ConfirmButton type="button" onClick={onClickingLogout}>
                    Confirm
                  </ConfirmButton>
                </ModelContainer>
              )}
            </Popup>
            <Popup
              model
              trigger={
                <LogoutIconButton
                  type="button"
                  data-testid="theme"
                  onClick={onChangeTheme}
                >
                  <BiLogOut color="#141414" size={25} />
                </LogoutIconButton>
              }
            >
              {close => (
                <ModelContainer>
                  <ModalDesc>Are you sure, you want to logout?</ModalDesc>
                  <CloseButton
                    type="button"
                    data-testid="theme"
                    onClick={() => close()}
                  >
                    Cancel
                  </CloseButton>
                  <ConfirmButton type="button" onClick={onClickingLogout}>
                    Confirm
                  </ConfirmButton>
                </ModelContainer>
              )}
            </Popup>
          </AppContainer>
        </NavbarHead>
      )
    }}
  </ThemeAndVideo.Consumer>
)
export default withRouter(Header)
