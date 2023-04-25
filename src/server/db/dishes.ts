import { segmentIds } from '@/server/db/segments';

/**
 * Возвращает доступные блюда
 * @param param0
 */
export function dishes({ segment }: { segment?: string }) {
	if (!segment) {
		return flatDishes;
	}

	return _dishes[<keyof typeof _dishes>segment];
}

/**
 * @param dishId
 */
export function dish(dishId: string) {
	return flatDishes.find(({id}) => id === dishId);
}

const _dishes = {
	[segmentIds.breakfast]: [
		d(250, 'Яичница-глазунья из трех яиц', segmentIds.breakfast, '7.jpg'),
		d(285, 'Омлет из трёх яиц', segmentIds.breakfast, '10.jpg'),
		d(490, 'Домашние сырники', segmentIds.breakfast, '10.jpg'),
		d(190, 'Блины', segmentIds.breakfast, '10.jpg'),
		d(450, 'Каша c ягодами и кедровыми орехами', segmentIds.breakfast, '10.jpg'),
		d(850, 'Яйцо Бенедикт с лососем', segmentIds.breakfast, '10.jpg'),
	],

	[segmentIds.raw]: [
		d(490, 'Гречневая каша с авокадо, яйцом пашот и пармезаном', segmentIds.raw, '10.jpg'),
		d(890, 'Кобб – салат с лососем', segmentIds.raw, '10.jpg'),
		d(960, 'Кобб – салат с креветками', segmentIds.raw, '10.jpg'),
	],

	[segmentIds.snaсks]: [
		d(640, 'Бутерброды канапе', segmentIds.snaсks, '11.jpg'),
		d(1200, 'Бутерброды на чипсах', segmentIds.snaсks, '12.jpg'),
		d(3600, 'Закуски всех мастей', segmentIds.snaсks, '13.jpg'),
	],

	[segmentIds.bruskets]: [
		d(800, 'Брускета цезарь', segmentIds.bruskets, '14.jpg'),
		d(800, 'Брускеты итальяно', segmentIds.bruskets, '15.jpg')
	],

	[segmentIds.forVine]: [
		d(1800, 'Сет к вину', segmentIds.forVine, '16.jpg'),
		d(1800, 'Нарезка сыров', segmentIds.forVine, '17.jpg')
	],

	[segmentIds.salad]: [
		d(700, 'Цезарь греческий', segmentIds.salad, '18.jpg'),
		d(900, 'Цезарь с креветками', segmentIds.salad, '19.jpg'),
		d(960, 'Салат лансай', segmentIds.salad, '20.jpg'),
	],

	[segmentIds.soups]: [
		d(500, 'Куриный суп с лапшой', segmentIds.soups, '21.jpeg'),
		d(700, 'Рыбный суп', segmentIds.soups, '22.jpeg'),
		d(700, 'Суп гороховый', segmentIds.soups, '23.jpg'),
	],

	[segmentIds.pasta]: [
		d(700, 'Паста с баклажанами', segmentIds.pasta, '24.jpg'),
		d(900, 'Мафальдине болоньезе', segmentIds.pasta, '25.jpeg'),
		d(900, 'Итальянская паста фетучини', segmentIds.pasta, '26.jpg'),
		d(850, 'Паста карбонара', segmentIds.pasta, '27.jpg'),
	],

	[segmentIds.meat]: [
		d(1600, 'Тендерлоин стейк', segmentIds.meat, '28.jpg'),
		d(2300, 'Ковбой стейк', segmentIds.meat, '29.jpg'),
		d(2000, 'Ассорти шашлык', segmentIds.meat, '30.jpg'),
		d(1300, 'Шашлык из телятины', segmentIds.meat, '31.jpg'),
	],

	[segmentIds.fish]: [
		d(1300, 'Стейки форели', segmentIds.fish, '32.jpeg'),
		d(1600, 'Какая-то рыба целиком', segmentIds.fish, '33.jpg'),
		d(1600, 'Тунец', segmentIds.fish, '34.jpg')
	]
}

const flatDishes = Object.values(_dishes).flat(1);

function createHash(str: string): string {
	let hash = 0;

	if (str.length == 0) return hash.toString();

	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = ((hash << 5) - hash) + char;
		hash = hash & hash;
	}

	return hash.toString();
}

function d(price: number, name: string, segment: string, img: string) {
	return {price, name, segment, img: `http://localhost:5540/static/${img}`, id: createHash(name)};
}
