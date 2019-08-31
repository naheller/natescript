import React, { useContext } from 'react'
import styled from 'styled-components'
import { node, string, func } from 'prop-types'
import { Link } from 'gatsby'

import ThemeContext from '../context/ThemeContext'

const StyledButton = styled.button`
    width: max-content;
    padding: 0.35rem 1.35rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundColor};
    border: ${({ theme }) => `${theme.borderWidthRem}rem solid ${theme.borderColor}`};
    border-radius: 2rem;
    user-select: none;
    &:hover {
        cursor: pointer;
    }
    &:active {
    }
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.color};
`

const Button = ({ children, onClick }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledButton theme={theme} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

const ButtonLink = ({ children, linkPath }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledLink theme={theme} to={linkPath}>
            <Button>{children}</Button>
        </StyledLink>
    )
}

Button.propTypes = {
    children: node.isRequired,
    onClick: func
}

ButtonLink.propTypes = {
    children: node.isRequired,
    linkPath: string.isRequired
}

Button.defaultProps = {
    onClick: () => {}
}

export { Button, ButtonLink }
