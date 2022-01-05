import React from 'react';
import {useHistory} from 'react-router-dom'

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function Survey() {

    // define history to make sure we can click to next page
    const history = useHistory();

    // route to survey page
    const onSeeResults = () => {
        history.push('/physical_activity_results');
    }

return (
    <div className="container">
    <p>Survey</p>
    <button onClick={onSeeResults}>See Your Results!</button>
    </div>
);
}

export default Survey;
