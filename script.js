// Challenge 2

async function getWeather(apikey, zip, callback) {
	const units = 'imperial';
	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;
	fetch(path)
		.then((res) => res.json())
		.then((json) => {
			callback(json.main.temp, json.weather[0].description);
		})
		.catch((err) => console.log(err.message));
}

// Challenge 3

// async function getWeather(apikey, zip) {
// 	return new Promise((resolve, reject) => {
// 		const units = 'imperial';
// 		const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;
// 		fetch(path)
// 			.then((res) => res.json())
// 			.then((json) => {
// 				// callback(json.main.temp, json.weather[0].description);
// 				return;
// 			})
// 			.catch((err) => console.log(err.message));
// 	});
// }

// module.exports = {
// 	getWeather,
// };

export default getWeather;
