import Coasts from './components/Coasts/Coasts';
import NewCoast from './components/NewCoast/NewCoast';

function App() {
    const coast = [
        {
            description: 'vacuum cleaner',
            amount: 989.9,
            date: new Date(2023, 11, 25),
        },
        {
            description: 'ovens',
            amount: 979.9,
            date: new Date(2023, 3, 25),
        },
        {
            description: 'couch',
            amount: 969.9,
            date: new Date(2023, 5, 25),
        },
        {
            description: 'chair',
            amount: 959.9,
            date: new Date(2023, 7, 25),
        },
    ];
    return (
        <div className='App'>
            <NewCoast />
            <Coasts coast={coast} />
        </div>
    );
}

export default App;
