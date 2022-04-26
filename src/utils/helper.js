import { showToastMessage } from "./Toast";

export const thousandFormatter = (num) => {
	var str = num.toString().split(".");
	if (str[0].length >= 4) {
		str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
	}
	if (str[1] && str[1].length >= 4) {
		str[1] = str[1].replace(/(\d{3})/g, "$1 ");
	}
	return str.join(".");
};

export const fieldChecker = (field = {}) => {
	if (field.value === "")
		return showToastMessage({
			type: "warning",
			title: field.id,
			description: `Please check the ${field.id.toLowerCase()} field`,
		});
};
