import React, { useContext } from 'react'
import styled from 'styled-components'
import { node, string, func } from 'prop-types'
import { Link } from 'gatsby'

import ThemeContext from '../context/ThemeContext'

const StyledButton = styled.div`
    width: max-content;
    margin: 1rem;
    padding: 0.5rem 1rem;
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    border: 0.05rem solid ${props => props.theme.borderColor};
    border-radius: 0.25rem;
    box-shadow: 0.05rem 0.05rem ${props => props.theme.boxShadowColor};
    transition: all 0.2s;
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

export const Button = ({ children, onClick }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <StyledButton theme={theme} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

export const ButtonLink = ({ children, linkPath }) => {
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
