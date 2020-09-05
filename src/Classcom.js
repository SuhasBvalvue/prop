import React from "react";
import Funcom from "./Funcom";
import Page from "./Page";

class Classcom extends React.Component {
	render(props) {
		this.state = {
			experience: [
				{
					no: "1",
					name: "Rahul",
					address: "Mumbai",
				},
				{
					no: "2",
					name: "Amit",
					address: "Delhi",
				},
				{
					no: "3",
					name: "Ankit",
					address: "Gandhinagar",
				},
			],
		};

		return (
			<div>
				{this.state.experience.map(item => (
					<Page
						no={item.no}
						name={item.name}
						address={item.address}
					></Page>
				))}
			</div>
		);
	}
}

export default Classcom;
