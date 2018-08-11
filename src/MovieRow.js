import React from 'react'

class MovieRow extends React.Component {
	render() {
		return  <table key={this.props.movie.id}>
			<tbody>
				<tr>
					<td>
						<img src={this.props.movie.poster_src} width="100" alt="poster" style={{
							paddingRight: 10}}/>
					</td>
					<td>
						{this.props.movie.title}
						<p>{this.props.movie.overview}</p>
					</td>
				</tr>
			</tbody>
		</table>
	}
}

export default MovieRow