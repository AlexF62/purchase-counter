import React from 'react';
import styles from './Coasts.module.css';
import CostItem from '../Costitem/CostItem';
import Card from '../Card/Card';

const Coasts = ({ coast }) => {
    return (
        <Card className={styles.costs}>
            <CostItem
                date={coast[0].date}
                description={coast[0].description}
                amount={coast[0].amount}
            />
            <CostItem
                date={coast[1].date}
                description={coast[1].description}
                amount={coast[1].amount}
            />
            <CostItem
                date={coast[2].date}
                description={coast[2].description}
                amount={coast[2].amount}
            />
            <CostItem
                date={coast[2].date}
                description={coast[3].description}
                amount={coast[3].amount}
            />
        </Card>
    );
};

export default Coasts;
