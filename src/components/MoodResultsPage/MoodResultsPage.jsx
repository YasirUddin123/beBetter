import React from 'react';
import {useHistory} from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function MoodResultsPage() {
    const history = useHistory();

    // route to graph
    const onSeeGraph = () => {
        history.push('/graph');
    }

return (
    <div className="container">
    <p>Mood Results</p>
    <button onClick={onSeeGraph}>Next</button>

    </div>
);
}

export default MoodResultsPage;
