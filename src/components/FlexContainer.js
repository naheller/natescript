import React from 'react'
import styled from 'styled-components'
import { string, node } from 'prop-types'

const StyledFlexContainer = styled.div`
  margin: auto;
  padding: 1rem;
  display: flex;
  max-width: 700px;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`

const FlexContainer = ({ children, flexDirection, justifyContent, alignItems }) => {
  return (
    <StyledFlexContainer
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </StyledFlexContainer>
  )
}

FlexContainer.propTypes = {
  children: node.isRequired,
  flexDirection: string.isRequired,
  justifyContent: string,
  alignItems: string
}

FlexContainer.defaultProps = {
  justifyContent: '',
  alignItems: ''
}

export default FlexContainer
