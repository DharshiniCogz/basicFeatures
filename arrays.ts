const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

//Help with inference when extracting values
const cars = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
carMakers.push('100');

//Help with 'map'
carMakers.map((cars: string):string => {
    return cars.toUpperCase();
})

//Flexible type arrays
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-30');
importantDates.push(new Date());
importantDates.push('100');