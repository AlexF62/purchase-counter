import React from 'react';
import styles from './costitem.module.css';
import CostDate from '../CostDate/CostDate';
import Card from '../Card/Card';
import { useState } from 'react';

export default function CostItem({ amount, date }) {
    const [state, setState] = useState();

    const changeDescriptionHandler = () => {
        setState('Hello from React');
    };
    return (
        <Card className={styles['cost-item']}>
            <CostDate date={date} />
            <div className={styles['cost-item__description']}>
                <h2 className={styles['cost-item h2']}>{state}</h2>
                <div className={styles['cost-item__price']}>{amount}</div>
            </div>
            <button onClick={changeDescriptionHandler}>
                Изменить описание
            </button>
        </Card>
    );
}
