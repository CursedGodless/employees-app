import { Component } from 'react/cjs/react.production.min';
import './employees-add-form.css';


class EmployeesAddForm extends Component {
	state = {
		name: '',
		salary: ''
	}

	onValueChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit = (e) => {
		const { addEmployee } = this.props;
		const { name, salary } = this.state;
		e.preventDefault();
		addEmployee({ name, salary });
		this.setState({
			name: '',
			salary: ''
		})
	}

	render() {
		const { name, salary } = this.state;
		return (
			<div className="app-add-form">
				<h3>Добавьте нового сотрудника</h3>
				<form
					className="add-form d-flex"
					onSubmit={this.onSubmit}>
					<input type="text"
						className="form-control new-post-label"
						placeholder="Как его зовут?"
						required
						value={name}
						name="name"
						onChange={this.onValueChange} />
					<input type="number"
						className="form-control new-post-label"
						placeholder="З/П в $?"
						required
						value={salary}
						name="salary"
						onChange={this.onValueChange} />

					<button type="submit"
						className="btn btn-outline-light">Добавить</button>
				</form>
			</div>
		)
	}
}

export default EmployeesAddForm;