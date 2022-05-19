function logValue(x: Date | string) {
	if (x instanceof Date) {
		console.log(x.toUTCString());
	} else {
		console.log(x.toUpperCase());
	}
}
logValue(new Date()); // Mon, 15 Nov 2021 22:34:37 GMT
logValue('hello ts'); // HELLO TS
