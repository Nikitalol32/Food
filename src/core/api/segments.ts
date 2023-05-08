
export interface Segment {
	title: string;
	id: string;
}

export type Segments = Segment[];

export function getSegments(id: string): Promise<Segments> {
	return fetch(`http://localhost:5540/api/menu/segments/${id}`)
	.then((r) => {
		return r.json()
	})
}