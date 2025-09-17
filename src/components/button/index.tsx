import React from "react";

const index: React.FC<{
	label: string;
	name?: string;
	type?: "button" | "submit";
	disabled?: boolean;
	isLoading?: boolean;
	loadingName?: string;
	onClick?: () => void;
	bgColor?: string;
}> = (props) => {
	const {
		label,
		name = "btn-custom",
		type = "button",
		loadingName = "in progress...",
		disabled = false,
		isLoading = false,
		onClick,
		bgColor = "#007bff",
	} = props;
	return (
		<button
			onClick={onClick}
			disabled={disabled || isLoading}
			style={{
				backgroundColor: bgColor,
				padding: "1rem 2rem",
				borderRadius: "10px",
				cursor: "pointer",
			}}
			name={name}
			className="btn btn-primary"
			type={type}
		>
			{isLoading ? loadingName : label}
		</button>
	);
};

export default index;
