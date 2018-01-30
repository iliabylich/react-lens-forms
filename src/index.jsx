import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>Form</div>
        <Form />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
