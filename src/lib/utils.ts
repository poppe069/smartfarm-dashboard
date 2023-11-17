export function date(date: Date) {
	return new Date(date).toLocaleDateString('en', {
		dateStyle: 'medium'
	});
}

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

export function numberFormat(_number: string) {
	const numberFormatter = new Intl.NumberFormat('en-GB', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});

	try {
		return numberFormatter.format(Number(_number));
	} catch (error) {
		console.log(error);
	}
}
