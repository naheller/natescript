import React, { useContext } from 'react'
import styled from 'styled-components'
import { node } from 'prop-types'

import FlexContainer from './FlexContainer'
import ThemeContext from '../context/ThemeContext'

const StyledMain = styled.main`
    width: 100%;
    min-height: calc(100vh - ${({ theme }) => theme.headerHeightRem + theme.footerHeightRem}rem);
    background-color: ${({ theme }) => theme.backgroundColor};
`

const Main = ({ children }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledMain theme={theme}>
            <FlexContainer
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                {children}
            </FlexContainer>
        </StyledMain>
    )
}

Main.propTypes = {
    children: node.isRequired
}

export default Main
