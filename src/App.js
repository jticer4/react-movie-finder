import React, {Component} from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<table className="titleBar">
					<tbody>
						<tr>
							<td>
								<img width="50"
									  src="https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
									  alt="app icon"/>
							</td>
							<td width="8"/>
							<td>
								<h1>MoviesDB Search</h1>
							</td>
						</tr>
					</tbody>
				</table>
				<input style={{
					fontSize: 24,
					display: 'block',
					width: "99%",
					paddingTop: 8,
					paddingBottom: 8
				}} type="text" placeholder="Enter search term"/>
			</div>
		);
	}
}

export default App;
