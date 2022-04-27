const search = (event, objectData = [], setReturnedData, combinations = []) => {
	event.preventDefault();

	//sniff out user input/search values and convert to lowercase
	const input = event.target.value.toLowerCase();

	//store the filtered results in : 'const result'
	const result = objectData.filter((data) => {
		// initialize a variable to store combos in : 'let combinationQueries = ""'
		let combinationQueries = "";

		//loopp over the combo valuew passed by users
		combinations.forEach((arg) => {
			//first check if the current combo value exists in the object then..
			//add them together
			combinationQueries += data.hasOwnProperty(arg) && data[arg].toLowerCase().trim() + " ";
		});

		// loop over current "Object keys" and return the first successful
		// search match (".some()")
		return Object.keys(data).some((key) => {
			// return the first the first successful search match but
			// do not return if value is undefined, null, false, true, nad
			// trim values to removw trailing whitespaces

			return (
				(data[key] !== undefined &&
					data[key] !== null &&
					//activate/uncomment the feature/code beloew if you dont want to
					// filter by boolean values.
					// data[key] !== false && data[key] !== true &&
					JSON.stringify(data[key]).toLowerCase().trim().includes(input)) ||
				combinationQueries.trim().includes(input)
			);
		});
	});

	//function to recieve result of search query data
	setReturnedData(result);
};

export default search;
