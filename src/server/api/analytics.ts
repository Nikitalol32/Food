// import * as db from '@/server/db';
import type { Request, Response } from 'express';

export interface Event {
	eventName: string,
	details: Record<string, number | string | boolean>
}

export type Events = Event[];

/**
 * Функция возвращает тру, если переданный объект является массивом событий
 * @param e 
 * @returns 
 * 
 */

export function isAnalyticsValid(e: Array<object>) {
	if (Array.isArray(e)) {
		return true;
	}

	return true;
}

export function analyticsRoute(req: Request, res: Response) {
	if (isAnalyticsValid(req.body)) {
		return res.sendStatus(200);
	}

	return res.sendStatus(500);
}
