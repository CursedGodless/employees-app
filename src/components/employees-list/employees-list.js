import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {

	const employees = data.map(item => {
		const { id, ...rest } = item;
		return <EmployeesListItem
			{...rest}
			key={id}
			onDelete={() => onDelete(id)}
			onToggleProp={(e) => onToggleProp(e, id)}
		/>
	})

	return (
		<ul className="app-list list-group">
			{employees}
		</ul>
	)
}

export default EmployeesList;