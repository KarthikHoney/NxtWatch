import styled from 'styled-components'

export const UnOrderList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  flex-wrap: wrap;
`
export const NoVideoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoImage = styled.img`
  height: 70%;
  width: 80%;
`
export const NoHead = styled.h1`
  font-size: 29px;
  font-weight: normal;
  font-family: 'TimesNewRoman';
`
export const NoNotes = styled.p`
  font-size: 24px;
  font-weight: normal;
  font-family: 'TimesNewRoman';
`
export const RetryButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid black;
  padding: 6px;
  margin: 3px;
  cursor: pointer;
  @media screen (min-width: 786px) {
    color: green;
    font-size: 22px;
  }
`
