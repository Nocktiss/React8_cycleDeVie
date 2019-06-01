import React, { Component } from "react";

class MyTitle extends Component {
 state = {
			title: '',
			suptitle: '',
		};

	handleChange = (event) => {
		this.setState({ title: event.target.value });
	}

	submitForm = (event) => {
		e.preventDefault();
		this.setState({ suptitle: `Mon formulaire ${this.state.title}` })
	}

	componentDidMount = () => {
		console.log("Formulaire rendu")
	}

	componentDidUpdate = () => {
		console.log("Titre changé")
	}

	render() {
		return (
			<form onSubmit={this.submitForm}>
				<h1>{this.state.suptitle}</h1>
				<label htmlFor="title">Nouveau formulaire:</label>
				<input
					value={this.state.title}
					id="title"
					type="text"
					onChange={this.handleChange}
				/>
				<button>
					Submit
        </button>
			</form>
		);
	}
}

export default MyTitle;