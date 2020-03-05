import React from 'react';
import './Button.scss';

import { ReactComponent as Cross } from '../../icons/cross.svg';
import { ReactComponent as Correct } from '../../icons/correct.svg';
import { ReactComponent as Edit } from '../../icons/edit.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

function Button({ onClickHandler, text = '', icon }) {
    let buttonIcon;
    switch (icon) {
        case 'remove':
            buttonIcon = <Cross />;
            break;
        case 'save':
            buttonIcon = <Correct />;
            break;
        case 'edit':
            buttonIcon = <Edit />;
            break;
        case 'add':
            buttonIcon = <Plus />;
            break;
        default:
    }

    return (
        <button onClick={() => onClickHandler()} className={`btn btn-${icon}`}>
            {text}
            {icon && buttonIcon}
        </button>
    );
}

export default Button;
