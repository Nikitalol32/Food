import type { Request, Response } from 'express';
import * as db from '@/server/db';

/**
 * @file Ручка /restaurants.
 */

/**
 * Возвращает все доступные рестораны.
 */
export function restaurants(req: Request, res: Response): void {
	res.send(JSON.stringify(db.restaurants()));
}
