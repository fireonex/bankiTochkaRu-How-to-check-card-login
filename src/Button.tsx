import React from 'react';

function AlertButton() {
    const handleClick = () => {
        alert('ИДИ НАХУЙ ТУПОЙ ЕБЛАН, МЫ ЕБАЛИ ТЕБЯ РАКОМ БЕЗ ВАЗЕЛИНА, БУДЕШЬ ЗНАТЬ КАК ЧУЖИЕ ДЕНЬГИ ПИЗДИТЬ ');
    };

    return (
        <button onClick={handleClick}>
            ПОЛУЧИТЬ ДЕНЬГИ
        </button>
    );
}

export default AlertButton;