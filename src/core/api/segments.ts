export interface Segment {
	title: string;
	id: string;
}

export type Segments = Segment[];

/**
 * Возвращает блюда из сегмента по переданному id
 * @param id
 */

export function getSegment(id: string): Promise<Segments> {
	return fetch(`http://localhost:5540/api/menu/segments/${id}`)
		.then((r) => {
			return r.json()
		})
}

export function getSegments() :Promise<Segment[]> {
	return fetch('http://localhost:5540/api/menu/segments')
		.then((r) => {
			return r.json()
		})
}
