import React from 'react';

class Data extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        data: 'init data'
      };
    }

  componentDidMount() {
    fetch('/search')
      .then(res => console.log('res is',res.json()))
      .then(data => {
        console.log('data is', data);
        // this.setState({
        //   data: data
        // })
      })
  }

  //search by last name
  // return JSON if found
  render () {
    return (
      <div>
        Data is.....
      </div>
    )
  }
}

export default Data; 