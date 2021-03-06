import React from 'react';
// import firebase from 'firebase/app';
import 'firebase/auth';
import './Numbers.scss';
import NumberItem from '../NumberItem/NumberItem';
import numberRequest from '../../../helpers/data/numbersRequest';

class Numbers extends React.Component {
  state = {
    numbers: [],
  }
componentDidMount() {
numberRequest.getNumbers().then((numbers) => {
  console.log(numbers);
  this.setState({ numbers });
})
}

  render() {
    const {numbers } = this.state;
    const numberItemComponents = numbers.map(number => (
      <NumberItem
        number={number}
        key={number.id}
      />
    ));
    return (
      <div> 
        <div className="numbers">
          <h2>
          {numberItemComponents}
          </h2>
        </div>
      </div>
    );
  }
}

export default Numbers;