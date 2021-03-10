import React from 'react';
import { randomIdGenerator } from '../../../util';

import './baseButton.scss';

interface IBaseButtonProps {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const BaseButton: React.FC<IBaseButtonProps> = ({ text, onClick }) => (
    <button className="base--button button--gradual" data-text={ text } onClick={ onClick }>
        { text.split('').map(letter => <span key={ randomIdGenerator(letter) }>{ letter.toUpperCase() }</span>) }
    </button>
);
