import {
  FailureView,
  FailureImage,
  FailureHeading,
  FailureNote,
  RetryButton,
} from './styledComponents'

import ThemeAndVideo from '../../context/ThemeAndVideoContext'

const Failure = props => {
  const {onRetry} = props

  const onClickingRetry = () => {
    onRetry()
  }

  return (
    <ThemeAndVideo.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureHeadColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
        const failureNoteColor = isDarkTheme ? '#e2e8f0' : '#475569'

        const FailurePic = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <FailureView>
            <FailureImage src={FailurePic} alt="failure view" />
            <FailureHeading headingColor={failureHeadColor}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureNote noteColor={failureNoteColor}>
              We are having some trouble to complete your request. <br /> Please
              try again later.
            </FailureNote>
            <RetryButton
              type="button"
              data-testid="theme"
              onClick={onClickingRetry}
            >
              Retry
            </RetryButton>
          </FailureView>
        )
      }}
    </ThemeAndVideo.Consumer>
  )
}
export default Failure
