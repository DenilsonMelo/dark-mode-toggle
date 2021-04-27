import React from 'react';
import { func, string } from 'prop-types';

import { ToggleContainer }  from './styles'

const Toggle = ({ theme, toggleTheme }) => {

    return(
        <ToggleContainer >
            <button onClick={toggleTheme}>     
                Change           
            </button>
        </ToggleContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle;