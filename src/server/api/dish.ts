import type { Request, Response } from 'express';
import * as db from '@/server/db';
import { segmentIds } from '@/server/db';

/**
 * @file Ручка /menu/segments/:segment.
 */

/**
 * Возвращает все доступные продукты у переданного сегмента меню.
 *
 * @param req
 * @param res
 */
export function dishesBySegment(req: Request, res: Response): void {
	const
		{segment} = req.params;

	if (segment == null || !Object.values(segmentIds).some((id) => id === segment)) {
		res.status(400).send('Invalid segment param');
		return;
	}

	res.send(JSON.stringify(db.dishes({segment})));
}

/**
 * Возвращает продукт по переданному `id`.
 *
 * @param req
 * @param res 
 */
export function dishById(req: Request, res: Response): void {
	const
		{id} = req.params,
		dish = db.dish(id);

	if (!dish) {
		res.status(404).send('No dished with this id');
		return;
	}

	res.send(JSON.stringify(dish));
}