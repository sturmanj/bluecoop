import type { Request, Response, NextFunction } from "express";
import type { robot } from "../../types";

let robots: robot[] = [];

export function get(req: Request, res: Response, next: NextFunction) {
	res.json({ robot: robots.pop() });
}

export function post(req: Request, res: Response, next: NextFunction) {
	if (req.body.robots) {
		robots = req.body.robots;
	}

	res.json(robots);
}
