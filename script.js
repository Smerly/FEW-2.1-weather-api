// Challenge 2

// async function getWeather(apikey, zip, callback) {
// 	const units = 'imperial';
// 	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;
// 	fetch(path)
// 		.then((res) => res.json())
// 		.then((json) => {
// 			callback(json.main.temp, json.weather[0].description);
// 		})
// 		.catch((err) => console.log(err.message));
// }

// Challenge 3

// function getWeather(zip, apikey, units = 'imperial') {
// 	const resPromise = fetch(path);
// 	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;

// 	const jsonP = resPromise.then((res) => res.json());
// }

// Challenge 4

function getWeather(zip, apikey, units = 'imperial') {
	const resPromise = fetch(path);
	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;

	const jsonP = resPromise.then((res) => res.json());
}

// module.exports = {
// 	getWeather,
// };

export default getWeather;
