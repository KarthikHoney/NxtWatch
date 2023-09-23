import {Link} from 'react-router-dom'

import {
  ThumbnailUrl,
  CardContainer,
  ContentContainer,
  ProfileImage,
  VideoContent,
  ContentTitle,
  ContentPara,
  ViewAndDate,
  Dot,
} from './styledComponents'

import ThemeAndVideo from '../../context/ThemeAndVideoContext'

import './index.css'

const HomeVideoCard = props => {
  const {videos} = props

  const {
    id,
    title,
    thumbnailUrl,
    name,
    profileImageUrl,
    viewCount,
    publishedAt,
  } = videos

  return (
    <ThemeAndVideo.Consumer>
      {value => {
        const {isDarkTheme} = value
        const TextColor = isDarkTheme ? '#f9f9f9' : '#231f20'

        return (
          <Link to={`/videos/${id}`} className="link">
            <CardContainer>
              <ThumbnailUrl src={thumbnailUrl} alt="video thumbnail" />
              <ContentContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <VideoContent>
                  <ContentTitle color={TextColor}>{title}</ContentTitle>
                  <ContentPara color={TextColor}>{name}</ContentPara>
                  <ViewAndDate color={TextColor}>
                    {viewCount} view <Dot>&#5679;</Dot> {publishedAt}
                  </ViewAndDate>
                </VideoContent>
              </ContentContainer>
            </CardContainer>
          </Link>
        )
      }}
    </ThemeAndVideo.Consumer>
  )
}

export default HomeVideoCard
