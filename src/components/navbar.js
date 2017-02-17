import React from 'react'

export default props => {
	return (
		<nav className="navbar container">
			<div className="columns">
			<section className="navbar-section" id="logo">
				<a href="/"><h1>Maestro</h1></a>
			</section>
			<section className="navbar-section">
				<a href="/login" data-method='delete' className="btn btn-link">Hello</a>
				<a href="/logout" className="btn btn-link">Goodbye</a>
			</section>
		</div>
		</nav>
	)
}
