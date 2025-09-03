import React from "react";

const index: React.FC<{
	label: string;
	name?: string;
	type?: "button" | "submit";
}> = (props) => {
	const { label, name = "btn-custom", type = "button" } = props;
	return (
		<button
			style={{
				backgroundColor: "#007bff",
				padding: "1rem 2rem",
				borderRadius: "10px",
				cursor: "pointer",
			}}
			name={name}
			className="btn btn-primary"
			type={type}
		>
			{label}
		</button>
	);
};

export default index;
