import React, {Component} from 'react';
import './App.css';
import MovieRow from './MovieRow.js'
import $ from 'jquery'

class App extends Component {
	constructor(props) {
		super(props)
		//set the state to an empty object
		this.state = {}
		//console.log("this is my initializer")
		/*
				//my array of dummy data
				const movies = [
					{id: 0, poster_src: "https://image.tmdb.org/t/p/w600_and_h900_bestv2/lDlGPZS0UJYKxVlpyff3BMyPc2H.jpg", title: "Mean Girls", overview: "some filler text!!!"},
					{id: 1, poster_src: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg", title: "Infinity War", overview: "the ending is so sad :("}
				]


				//holds my array of movies
				var movieRows = []

				//for each movie in the movies array add it to the movieRows array
				movies.forEach((movie) => {
					const movieRow = <MovieRow movie={movie}/>

					//push each movieRow onto the movieRows array
					movieRows.push(movieRow)
				})

				//assign the movieRows array to the rows state variable
				this.state = {rows: movieRows}*/
		this.performSearch("ant man")
	}

	performSearch(searchTerm) {
		console.log("perform search using movies db")
		//stores the api key
		const urlString = "https://api.themoviedb.org/3/search/collection?api_key=d9b5150291e4eb66066d423a4d75f4b7&language=en-US&page=1&query=" + searchTerm
		$.ajax({
			url: urlString,
			success: (searchResults) => {
				console.log("data fetched successfully")

				//stores the results from the query
				const results = searchResults.results

				//console log the first result in the response
				//console.log(results[0])
				var movieRows = []
				results.forEach((movie) => {
					movie.poster_src = "http://image.tmdb.org/t/p/w185/" + movie.poster_path
					//4--di14--diconsole.log(movie.poster_path)
					const movieRow = <MovieRow key={movie.id} movie={movie}/>
					movieRows.push(movieRow)
				})
				this.setState({rows: movieRows})
			},
			error: (xhr, status, err) => {
				console.error("data fetched unsuccessfully")
			}
		})
	}


	searchChangeHandler(event) {
		console.log(event.target.value)
		const searchTerm = event.target.value
		const boundObject = this
		boundObject.performSearch(searchTerm)
	}

	render() {


		return (
			<div>
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
				}} onChange={this.searchChangeHandler.bind(this)} type="text" placeholder="Enter search term"/>

				{this.state.rows}
			</div>
		);
	}
}

export default App;
