import React from 'react';
import './NewCoast.module.css';
import { useState } from 'react';
const CoastForm = () => {
    const [userInput, setUserInput] = useState({
        name: '',
        number: '',
        date: '',
    });

    const nameChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            name: e.target.value,
        });
    };

    const numberChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            number: e.target.value,
        });
    };

    const dateChangeHandler = (e) => {
        setUserInput({
            ...userInput,
            date: e.target.value,
        });
    };

    return (
        <form>
            <div className='new-cost__controls'>
                <div className='new-cost__control'>
                    <label>Название</label>
                    <input type='text' onChange={nameChangeHandler} />
                </div>
                <div className='new-cost__control'>
                    <label>Сумма</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={numberChangeHandler}
                    />
                </div>
                <div className='new-cost__control'>
                    <label>Дата</label>
                    <input
                        type='date'
                        min='2023-06-01'
                        step='2024-12-31'
                        onChange={dateChangeHandler}
                    />
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить расход</button>
                </div>
            </div>
        </form>
    );
};

export default CoastForm;
