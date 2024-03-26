export interface Restaurant {
	city: String,
	coords: [Number, Number],
	full: String,
	house: String,
	number: String,
	street: String,
	workTime: String[],
	zip: String
}

export type Restaurants = Restaurant[];

export const getRestaurants: Promise<Restaurants> =
	fetch('http://localhost:5540/api/restaurants')
		.then((r) => r.json())
