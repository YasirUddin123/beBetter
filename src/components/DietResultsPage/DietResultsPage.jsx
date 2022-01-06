import React from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function DietResultsPage() {
    const history = useHistory();

    // grab reducer from the redux store via useSelector
    const diet = useSelector(store => store.dietResults);

    // route to sleep results page
    const onSeeSleepResults = () => {
        history.push('/sleep_results');
    }

return (
    <div className="container">
    <p>Diet Results</p>
    <p>{diet.map(results => {
            return (
                <li>{results.diet}</li>
            )
        })}
    </p>
    <button onClick={onSeeSleepResults}>Next</button>

    </div>
);
}

export default DietResultsPage;
