import type {Segments} from "./segments"

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
