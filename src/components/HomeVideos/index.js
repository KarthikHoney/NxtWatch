import {
  UnOrderList,
  NoVideoContent,
  RetryButton,
  NoHead,
  NoImage,
  NoNotes,
} from './styledComponents'

import HomeVideoCard from '../HomeVideoCard'

import ThemeAndVideo from '../../context/ThemeAndVideoContext'

const HomeVideo = props => {
  const {homeVideo, onRetry} = props
  const videosCount = homeVideo.length

  const onClickingRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideo.Consumer>
      {value => {
        const {isDarkTheme} = value
        const headColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        return videosCount > 0 ? (
          <UnOrderList>
            {homeVideo.map(eachVideo => (
              <HomeVideoCard video={eachVideo} key={eachVideo.id} />
            ))}
          </UnOrderList>
        ) : (
          <NoVideoContent>
            <NoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoHead headColor={headColor}>No Search results found</NoHead>
            <NoNotes noteColor={noteColor}>
              Try different keywords or remove search filter
            </NoNotes>
            <RetryButton type="button" onClick={onClickingRetry}>
              Retry
            </RetryButton>
          </NoVideoContent>
        )
      }}
    </ThemeAndVideo.Consumer>
  )
}

export default HomeVideo
