import styled from 'styled-components'

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ThumbnailUrl = styled.img`
  border-radius: 8px;
  border: 1px solid black;
  height: 300px;
  width: 400;
`
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ProfileImage = styled.img`
  height: 30px;
  width: 25px;
`
export const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`
export const ContentTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: 'TimesNewRoman';
  font-variant: 'emoji';
`
export const ContentPara = styled.p`
  font-size: 24px;
  font-weight: normal;
  font-family: 'TimesNewRoman';
  font-variant: 'emoji';
`
export const ViewAndDate = styled.p`
  font-size: 24px;
  font-weight: normal;
  font-family: 'TimesNewRoman';
`
export const Dot = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding-left: 5px;
  padding-right: 5px;
`
