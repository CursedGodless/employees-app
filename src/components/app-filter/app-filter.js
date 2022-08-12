import "./app-filter.css";

const AppFilter = (props) => {
	const { onFilterChange } = props;

	const btnData = [
		{ label: 'Все сотрудники', filter: 'all' },
		{ label: 'На повышение', filter: 'rise' },
		{ label: 'З/П больше 1000$', filter: 'moreThan1000' },
	]

	const btns = btnData.map(({ label, filter }) => {
		const active = props.filter === filter;
		const clazz = active ? 'btn btn-light' : 'btn btn-outline-light ';
		return <button
			type="button"
			className={clazz}
			data-filter={filter}
			key={filter}
			onClick={onFilterChange}>
			{label}
		</button>
	})

	return (
		<div className="btn-group">
			{btns}
		</div>
	)
}

export default AppFilter;