import type { Request, Response, NextFunction } from "express";
import type { robot } from "../../types";

let robots: robot[] = [
	{
		"id": "1540",
		"color": "red"
	},
	{
		"id": "1425",
		"color": "red"
	},
	{
		"id": "7034",
		"color": "red"
	},
	{
		"id": "1000",
		"color": "blue"
	},
	{
		"id": "1",
		"color": "blue"
	},
	{
		"id": "254",
		"color": "blue"
	}
];

export function get(req: Request, res: Response, next: NextFunction) {
	res.json(robots.pop());
}

export function post(req: Request, res: Response, next: NextFunction) {
	if (req.body.robots) {
		robots = req.body.robots;
	}

	res.json(robots);
}
