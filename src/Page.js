import React from "react";
import "./App.css";

const Page = props => {
	return (
		<div>
			<button
				onClick={() => {
					alert(
						<input
							type="text"
							placeholder={this.props.placeholder}
							className="input"
							value={this.state.value}
							onChange={this.onChange}
						/>
					);
				}}
			>
				Show Alert
			</button>
			<h1>
				<table>
					<tr>
						<th>{props.no}</th>
						<th>{props.name}</th>
						<th>{props.address}</th>
					</tr>
				</table>
			</h1>
		</div>
	);
};

export default Page;
