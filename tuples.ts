const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

//This also can be return as
const pepsi: [string, boolean, number] = ['brown', true, 40];

//Types alias
type Drink = [string, boolean, number];

const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

const carStats = {
    horsePower: 400,
    weight: 3364
}