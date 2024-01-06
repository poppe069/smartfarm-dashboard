/**
 * Formats a Date object into a localized date string.
 *
 * @param date - The Date object to format
 * @returns The formatted date string
 */
export function date(date: Date) {
	return new Date(date).toLocaleDateString('en', {
		dateStyle: 'medium'
	});
}

/**
 * Formats a date string into a localized date/time string.
 *
 * Parses the input date string and returns a formatted string with full date and time information.
 * Uses en-GB locale and 24-hour time format by default.
 * Returns the formatted string without any commas.
 * Logs any errors parsing the input date string.
 *
 * @param _date - The input date string to format
 * @returns The formatted date/time string
 */
export function dateTime(_date: string) {
	let date = new Date();
	try {
		if (_date !== null) {
			date = new Date(_date);
		}

		return new Intl.DateTimeFormat('en-GB', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit',
			hour12: false
		})
			.format(date)
			.replace(',', '');
	} catch (error) {
		console.log(error);
	}
}

/**
 * Formats a number into a string with a specified number of fraction digits.
 *
 * @param _number - The number to format as a string
 * @param _fractionDigit - The number of fraction digits to include. Default is 2.
 * @returns The formatted number string.
 */
export function numberFormat(_number: string, _fractionDigit: number = 2) {
	const numberFormatter = new Intl.NumberFormat('en-GB', {
		minimumFractionDigits: _fractionDigit,
		maximumFractionDigits: _fractionDigit
	});

	try {
		return numberFormatter.format(Number(_number));
	} catch (error) {
		console.log(error);
	}
}
