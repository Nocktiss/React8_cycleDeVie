import React, { Component } from "react";

class MyTitle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			suptitle: '',
		};
		this.handleChange = this.handleChange.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	handleChange(event) {
		this.setState({ title: event.target.value });
	}

	submitForm(e) {
		e.preventDefault();
		this.setState({ suptitle: `Mon formulaire ${this.state.title}` })
	}

	componentDidMount() {
		console.log("Formulaire rendu")
	}

	componentDidUpdate() {
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