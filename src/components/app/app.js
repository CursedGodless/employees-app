import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {
	constructor(props) {
		super(props);
		this.maxId = 4;
	}
	state = {
		data: [
			{ name: "John D.", salary: "1252$", id: 0, increase: false, rise: false },
			{ name: "Martin S.", salary: "4112$", id: 1, increase: true, rise: false },
			{ name: "Bob K.", salary: "641$", id: 2, increase: false, rise: true }
		],
		term: '',
		filter: 'all'
	}

	onDelete = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}

	onToggleProp = (e, id) => {
		const prop = e.currentTarget.getAttribute('data-prop')

		this.setState(({ data }) => {
			return {
				data: data.map(item => {
					if (item.id === id) {
						return { ...item, [prop]: !item[prop] }
					}
					return item
				})
			}
		})
	}

	addEmployee = ({ name, salary }) => {
		const newEmp = {
			name,
			salary: salary + '$',
			id: this.maxId++,
			increase: false,
			rise: false
		}

		this.setState(({ data }) => ({
			data: [...data, newEmp]
		}))
	}

	onSearch = (e) => {
		const term = e.target.value;
		this.setState({
			term
		})
	}

	searchEmp = (data, term) => {
		if (!term.length) return data;
		return data.filter(item => item.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
	}

	filterEmp = (data, filter) => {
		switch (filter) {
			case 'rise':
				return data.filter(item => item.rise)
			case 'moreThan1000':
				return data.filter(item => item.salary.slice(0,-1) >= 1000)
			default:
				return data
		}
	}

	onFilterChange = (e) => {
		const filter = e.currentTarget.getAttribute('data-filter');
		this.setState({ filter })
	}

	render() {
		const { data, term, filter } = this.state;
		const visibleData = this.filterEmp(this.searchEmp(data, term), filter)
		return (
			<div className="app">
				<AppInfo data={data} />

				<div className="search-panel">
					<SearchPanel onSearch={this.onSearch} term={term} />
					<AppFilter onFilterChange={this.onFilterChange} filter={filter}/>
				</div>

				<EmployeesList data={visibleData} onDelete={this.onDelete} onToggleProp={this.onToggleProp} />
				<EmployeesAddForm addEmployee={this.addEmployee} />
			</div>
		);
	}
}


export default App;
