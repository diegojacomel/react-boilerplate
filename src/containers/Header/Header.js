// Modules
import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled('header')`
    ${() => `
        background: #000000;
        color: #ffffff;
    `}
`;

function Header() {
    return <HeaderStyled>Header</HeaderStyled>;
}

export default Header;
