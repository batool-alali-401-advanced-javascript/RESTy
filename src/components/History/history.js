import React from 'react';
import TempHistory from './tempHistory.js';
import './history.scss';






class HistoryList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          historyArr: [],
          currDetails: props.history || {},
          selectedIndex: props.history && props.history.length ? 0 : null,
        };
    }

    async showFetchDetails(index) {
        await this.setState({
          currDetails: this.props.history[index],
          selectedIndex: index,
        });
      }
    
      async handleSubmit(index) {
        await this.props.fetchPrevReq(index);
      }

    render() {
        return (
            <div className="content" id="history">
              <h2>API History</h2>
              <div className="big-history flex-row">
                <TempHistory
                  history={this.props.history}
                  showFetchDetails={this.showFetchDetails.bind(this)}
                  onSubmit={this.handleSubmit.bind(this)}
                  selectedIndex={this.state.selectedIndex}
                  selectFirst={true}
                />
                
              </div>
            </div>
            
        );
    }

}
export default HistoryList;
