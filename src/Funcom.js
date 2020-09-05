import React from "react";
import {} from "react-dom";

class Funcom extends React.Component {
	state = {
		user: [
			{ id: 1, name: "mukesh" },
			{ id: 2, name: "sahil" },
		],
	};
	render() {
		const myname = this.state.user.map(item => {
			return <h3>{item.name}</h3>;
		});

		return <div>{myname}</div>;
	}
}
export default Funcom;
