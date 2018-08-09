import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table style={{
          backgroundColor: '#000',
           display: 'block',
           color: '#fff'
        }}>
          <tbody>
            <tr>
              <td>
					  <img width="50" src="https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt=""/>
              </td>
              <td>
                MoviesDB Search
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
