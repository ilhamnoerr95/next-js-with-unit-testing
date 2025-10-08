import React from "react";
interface IProps {
	placeholder?: string;
	type?: string;
	value?: string | number;
	onChange?: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	as?: "input" | "textarea";
	label?: string;
	id?: string;
	ariaLabel?: string;
	className?: string;
}

const InputCustom: React.FC<IProps> = (props) => {
	const {
		id,
		// gunanya untuk memberikan nama agar bisa dibaca oleh screen reaader
		ariaLabel,
		label,
		placeholder = "Placeholder ...",
		type = "text",
		onChange,
		value,
		as = "input",
		className,
	} = props;

	const InputCustom = as;
	return (
		<div className="flex flex-col gap-2">
			{label && id && (
				<label
					htmlFor={id} // terhubung dengan id input
					className="font-medium"
				>
					{label}
				</label>
			)}
			<InputCustom
				aria-label={ariaLabel}
				id={id}
				placeholder={placeholder}
				type={as === "input" ? type : undefined}
				onChange={onChange}
				value={value}
				className={`${className} border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300`}
			/>
		</div>
	);
};

export default InputCustom;
