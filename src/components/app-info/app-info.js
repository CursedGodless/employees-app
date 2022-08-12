import "./app-info.css";

const AppInfo = (props) => {
	const { data } = props,
		emps = data.length,
		increasedEmps = data.filter(item => item.increase).length;
	return (
		<div className="app-info">
			<h1>Учет сотрудников в компании N</h1>
			<h2>Общее число сотрудников: {emps}</h2>
			<h2>Премию получат: {increasedEmps}</h2>
		</div>
	)
}

export default AppInfo;