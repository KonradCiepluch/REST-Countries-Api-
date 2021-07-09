import React from 'react';
import { StyledHeader, Button, Heading } from './Header.styles';

const Header = ({darkmode, switchMode}) => {
    return ( 
        <StyledHeader darkmode={darkmode}>
            <Heading darkmode={darkmode}>Where in the world?</Heading>
            <Button darkmode={darkmode} onClick={switchMode}><i className={`${darkmode ? 'fas' : 'far'} fa-moon`}></i>Dark Mode</Button>
        </StyledHeader>
     );
}
 
export default Header;