import type { Request, Response, NextFunction } from "express";
import type { robot } from "../../types";

let queue: Response[] = []
let robots: robot[] = []

setInterval(() => {
	while (queue.length != 0) {
		if (robots.length == 0) break
		
		let req = queue.shift()

		if (!req.destroyed) req.json(robots.pop()) 
	}
}, 1000)

export function get(req: Request, res: Response, next: NextFunction) {
	queue.push(res)
}

export function post(req: Request, res: Response, next: NextFunction) {
	if (req.body.robots) {
		robots = req.body.robots;
	}

	res.json(robots);
}
