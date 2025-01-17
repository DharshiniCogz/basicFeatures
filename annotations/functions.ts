const add = (a: number, b: number): number => {
    return a + b;
};

const subract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

const throwError = (message: string): void => {
    throw new Error(message);
};

const todasWeather = {
    date:new Date(),
    weather: 'sunny'
};

/*const logWeather = (forecast: {date: Date, weather: String}): void => {
    console.log(forecast.date);
    console.log(forecast.weather)
};*/

const logWeather = ({date, weather}: {date:Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todasWeather)