import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('https://c4.wallpaperflare.com/wallpaper/322/315/802/windows-10-red-in-4k-wallpaper-preview.jpg');
  height: 100vh;
  background-size: cover;
`
export const InputName = styled.label`
  font-size: 20px;
  font-weight: 10px;
  font-family: 'TimesNewRoman';
  color: black;
`
export const InputField = styled.input`
  font-family: 'TimesNewRoman';
  font-size: 15px;
  color: #475569;
  outline: none;
  padding: 8px;
  width: 100%;
  border: 1px solid #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
`

export const checkBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px;
`
export const Checkbox = styled.input`
  width: 15px;
  height: 15px;
  margin-right: 5px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0 4px 0 2px rgb(#4ef542);
  width: 350px;
`
export const LoginLogo = styled.img`
  width: 180px;
  align-self: center;
  margin-bottom: 15px;
`
export const InputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
`
export const LoginButton = styled.button`
  width: 100%;
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  font-family: 'TimesNewRoman';
  font-size: 15px;
  height: 30px;
  color: #ffffff;
  margin-top: 20px;
  cursor: pointer;
`
export const SubmitError = styled.p`
  font-family: 'TimesNewRoman';
  font-size: 12px;
  color: #ff0b37;
`
export const ShowPassword = styled.label`
  font-family: 'TimesNewRoman';
  font-size: 15px;
  color: #1e293b;
`
