import React from 'react';
import {useHistory} from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function SleepResultsPage() {
    const history = useHistory();

    // route to mood results page
    const onSeeMoodResults = () => {
        history.push('/mood_results');
    }

return (
    <div className="container">
    <p>Sleep Results</p>
    <button onClick={onSeeMoodResults}>Next</button>

    </div>
);
}

export default SleepResultsPage;
