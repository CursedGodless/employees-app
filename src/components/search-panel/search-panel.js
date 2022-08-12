import './search-panel.css';

const SearchPanel = (props) => {
	const { onSearch, term } = props;
	return (
		<input type="text"
			className="form-control search-input"
			placeholder="Найти сотрудника"
			onChange={onSearch}
			value={term} />
	)
}

export default SearchPanel;