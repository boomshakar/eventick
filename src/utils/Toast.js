import { notification } from "antd";
import React from "react";
import { ReactComponent as ErrorIcon } from "../assets/icons/errorIconM.svg";
import { ReactComponent as SuccessIcon } from "../assets/icons/successIconM.svg";
import { ReactComponent as WarningIcon } from "../assets/icons/warningIconM.svg";

// export const Toast = {
//   open: ({ type, title, message, key, duration = 4.5 }) => {
//     notification[type]({
//       message: title,
//       description: message,
//       key,
//       duration,
//     });
//   },
//   close: (key) => {
//     notification.close(key);
//   },
// };

export const showToastMessage = ({
	type = required("type"),
	title = required("title"),
	description = required("description"),
	duration = 4,
	placement = "topRight",
	icon,
}) => {
	const iconImage =
		type === "success" ? (
			<SuccessIcon />
		) : type === "warning" ? (
			<WarningIcon />
		) : type === "error" ? (
			<ErrorIcon />
		) : (
			<WarningIcon />
		);
	notification[type]({
		message: title,
		description,
		duration,
		placement,
		icon: icon ?? iconImage,
		maxCount: 3,
		className: "customNotification",
	});
};

function required(varName) {
	throw new Error(`${varName} is required`);
}
