  
import React from 'react';
import IdSearch from './Components/IdSearch'
import NameSearch from './Components/NameSearch'

class App extends React.Component {
  render() {
    return (
      <div>
        <IdSearch />
        <NameSearch />
        <div id="reportingArea"></div>
      </div>
    )
  }
}

export default App;