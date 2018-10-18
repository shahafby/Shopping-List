import React from 'react';
import { AddItem } from '../body/addItem/AddItem';


export class EditModal extends React.Component {

	constructor(props) {
		super(props);

		const outerStyle = {
			position: "fixed",
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
			overflow: "auto",
			zIndex: 1
		};

		// default style
		const style = {
			modal: {
				position: "relative",
				width: 500,
				padding: 20,
				boxSizing: "border-box",
				backgroundColor: "#fff",
				margin: "40px auto",
				borderRadius: 3,
				zIndex: 2,
				textAlign: "left",
				boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
				
				// ...this.props.style.modal
			},
			overlay: {
				position: "fixed",
				top: 0,
				bottom: 0,
				left: 0,
				right: 0,
				width: "100%",
				height: "100%",
				backgroundColor: "rgba(0,0,0,0.5)",
				
				// ...this.props.style.overlay
			}
		};

		this.state = {outerStyle, style};
	}

	// render modal
	render() {
		return (
			<div
				style={{
					...this.outerStyle,
					// display: this.props.isModalOpen ? "block" : "none"
					display: "block"

				}}
			>
				<div style={this.state.style.overlay} onClick={this.props.closeModal} />
				<div onClick={this.props.closeModal} />
				<div style={this.state.style.modal}>{this.props.children}</div>
			</div>
		);
	}
}