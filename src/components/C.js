import {MyContext} from "../index";

export default  function C({users}) {


	let asd = null
	console.log(users);
	return (
		<div>
		C
			<MyContext.Consumer>
				{
					(qwe)=> {
						asd = qwe;
						console.log(asd.prop1);
						asd.foo()
					}
				}

			</MyContext.Consumer>

		</div>
	);
}
