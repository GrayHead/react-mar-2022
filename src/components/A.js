import B from "./B";

export default  function A({users}) {
	return (
		<div>
		Component A content
			<B users={users}/>

		</div>
	);
}
