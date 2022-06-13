import React from 'react';

class Data extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        data: ''
      };
    }

  componentDidMount() {
    fetch('/search')
      .then(res => console.log('res is',res.json()))
      .then(data => {
        this.setState({
          data: data
        })
      })
  }
  render () {
    return (
      <div>
        Data is.....
      </div>
    )
  }
}

export default Data; 