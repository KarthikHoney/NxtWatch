import styled from 'styled-components'

export const FailureView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FailureImage = styled.img`
  height: 400px;
  width: 450px;
`
export const FailureHeading = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: 'serif';
  color: ${props => props.color};
`
export const FailureNote = styled.p`
  font-size: 20px;
  font-weight: normal;
  font-family: 'serif';
  color: ${props => props.color};
`
export const RetryButton = styled.button`
  border: 1px solid blue;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  font-size: 20px;
  font-weight: normal;
  font-family: 'serif';
`
