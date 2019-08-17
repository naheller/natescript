import React, { useContext } from 'react'
import styled from 'styled-components'
import { string } from 'prop-types'

import FlexContainer from './FlexContainer'
import ThemeContext from '../context/ThemeContext'

const StyledFooter = styled.footer`
    width: 100%;
    height: 4rem;
    background-color: ${({ theme }) => theme.backgroundColor};
    h1 {
        color: ${({ theme }) => theme.color};
    }
`

const Footer = ({ siteTitle }) => {
    const { isDark, toggleDark, theme } = useContext(ThemeContext)

    return (
        <StyledFooter theme={theme}>
            <FlexContainer
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <h1 style={{ margin: 0 }}>{siteTitle}</h1>
                <button type="button" onClick={toggleDark}>
                    {isDark ? `Light mode ☀` : `Dark mode ☾`}
                </button>
            </FlexContainer>
        </StyledFooter>
    )
}

Footer.propTypes = {
    siteTitle: string.isRequired
}

export default Footer
