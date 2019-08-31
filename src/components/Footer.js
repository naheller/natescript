import React, { useContext } from 'react'
import styled from 'styled-components'

import FlexContainer from './FlexContainer'
import ThemeContext from '../context/ThemeContext'

const StyledFooter = styled.footer`
    width: 100%;
    height: ${({ theme }) => theme.headerHeightRem}rem;
    background-color: ${({ theme }) => theme.backgroundColor};
    h5 {
        margin: 0;
        user-select: none;
        color: ${({ theme }) => theme.color};
    }
`

const Footer = () => {
    const { /* isDark, toggleDark, */ theme } = useContext(ThemeContext)

    return (
        <StyledFooter theme={theme}>
            <FlexContainer flexDirection="row" justifyContent="space-between" alignItems="center">
                {/* <h5 style={{ margin: 0 }}>Footer</h5> */}
            </FlexContainer>
        </StyledFooter>
    )
}

export default Footer
