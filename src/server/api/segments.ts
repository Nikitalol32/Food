import type { Request, Response } from 'express';
import * as db from '@/server/db';

/**
 * @file Ручка /menu/segments.
 */

/**
 * Возвращает все доступные сегменты меню.
 */
export function segments(req: Request, res: Response): void {
	res.send(JSON.stringify(db.segments()));
}
