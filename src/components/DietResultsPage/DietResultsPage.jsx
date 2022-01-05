import React from 'react';
import {useHistory} from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function DietResultsPage() {
    const history = useHistory();

    // route to diet results page
    const onSeeSleepResults = () => {
        history.push('/sleep_results');
    }

return (
    <div className="container">
    <p>Diet Results</p>
    <button on={onSeeSleepResults}>Next</button>

    </div>
);
}

export default DietResultsPage;
