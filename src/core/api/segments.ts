export interface Segment {
	title: string;
	id: string;
}

export type Segments = Segment[];

/**
 * Возвращает сегменты меню по переданному
 * @param id
 */

export function getSegments() :Promise<Segment[]> {
	return fetch('http://localhost:5540/api/menu/segments')
		.then((r) => {
			return r.json()
		})
}
