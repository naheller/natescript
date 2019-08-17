import React, { useContext } from 'react'
import styled from 'styled-components'
import { node, string, func } from 'prop-types'
import { Link } from 'gatsby'

import ThemeContext from '../context/ThemeContext'

const StyledButton = styled.button`
    width: max-content;
    padding: 0.5rem 1rem;
    color: ${({ theme }) => theme.color};
    background-color: ${({ theme }) => theme.backgroundColor};
    border: 0.05rem solid ${({ theme }) => theme.borderColor};
    box-shadow: 0.05rem 0.05rem ${({ theme }) => theme.boxShadowColor};
    user-select: none;
    &:hover {
        cursor: pointer;
    }
    &:active {
        transform: translate(0.05rem, 0.05rem);
        box-shadow: 0 0;
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
        <Button>
            <StyledLink theme={theme} to={linkPath}>
                {children}
            </StyledLink>
        </Button>
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
