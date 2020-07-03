import React from 'react';
import If from '../If/if';


function TempHistory(props) {
  const historyArr = [];
  let selectedIndex = props.selectedIndex;

  for (let i = 0; i < props.history.length; i++) {
    const currHistory = props.history[i];
    historyArr.push(
      <li
        key={i}
        value={i}
        className={i === 0 && props.selectFirst ? 'selected-history' : null}
        onClick={updateActiveIndex}
      >
        {currHistory.reqType} {currHistory.url}
      </li>
    );
  }

  function updateActiveIndex(e) {
    const prevSelected = document.querySelector('.selected-history');

    if (prevSelected) {
      prevSelected.classList.remove('selected-history');
    }

    e.target.classList.add('selected-history');
    selectedIndex = e.target.value;

    if (props.showFetchDetails) {
      props.showFetchDetails(selectedIndex);
    }
  }


  return (
    <If condition={props}>
      <div className="mini-history">
        <h3>Previous Requests</h3>
        <ul className="history-list">{historyArr}</ul>
      </div>
    </If>
  );
}

export default TempHistory;