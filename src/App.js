import React, {Component} from 'react';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		console.log("this is my initializer")

		//my array of dummy data
		const movies = [
			{id: 0, title: "Mean Girls", overview: "some filler text!!!"},
			{id: 1, title: "Infinity War", overview: "the ending is so sad :("}
		]
		//add "rows" to my state value in order to display the movie data
		this.state = {
			rows: [
				<p key="1">This is my row0</p>,
				<p key="2">This is my row1</p>,
				<p key="3">This is my row2</p>
			]
		}

		//holds my array of movies
		var movieRows = []

		//for each movie in the movies array add it to the movieRows array
		movies.forEach((movie) => {
			movieRows.push(<p key={movie.id}>{movie.title}</p>)
		})

		//assign the movieRows array to the rows state variable
		this.state = {rows: movieRows}
	}


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
					paddingBottom: 8,
					paddingLeft: 16
				}} type="text" placeholder="Enter search term"/>

				{this.state.rows}
			</div>
		);
	}
}

export default App;
