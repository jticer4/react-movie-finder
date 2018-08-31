import React from 'react'

class MovieRow extends React.Component {

	viewMovie() {
		console.log("view movie is working!")
	}

	render() {
		return  <table key={this.props.movie.id}>
			<tbody>
				<tr>
					<td>
						<img src={this.props.movie.poster_src} width="100" alt="poster" style={{
							paddingRight: 10}}/>
					</td>
					<td>
						<h3>{this.props.movie.name}</h3>
						<p>{this.props.movie.overview}</p>
						<input type="button" value="view" onClick={this.viewMovie}/>
					</td>
				</tr>
			</tbody>
		</table>
	}
}

export default MovieRow