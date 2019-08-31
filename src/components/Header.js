import React, { useContext } from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

import FlexContainer from './FlexContainer'
import ThemeContext from '../context/ThemeContext'

const StyledHeader = styled.header`
    width: 100%;
    height: ${({ theme }) => theme.headerHeightRem}rem;
    background-color: ${({ theme }) => theme.backgroundColor};
    h3 {
        margin: 0;
        user-select: none;
        color: ${({ theme }) => theme.color};
    }
`

const Header = ({ siteTitle }) => {
    const { isDark, toggleDark, theme } = useContext(ThemeContext)

    return (
        <StyledHeader theme={theme}>
            <FlexContainer flexDirection="row" justifyContent="space-between" alignItems="center">
                <h3 onClick={toggleDark}>{`${isDark ? `☾` : `☀`} ${siteTitle}`}</h3>
            </FlexContainer>
        </StyledHeader>
    )
}

Header.propTypes = {
    siteTitle: string.isRequired
}

export default Header
