import type { Request, Response, NextFunction } from "express";
import type { layout } from "../../types";
import { readFileSync, writeFileSync } from "fs";

let layout: layout;

updateLayout();

export function get(req: Request, res: Response, next: NextFunction) {
	res.json(layout);
}

export function post(req: Request, res: Response, next: NextFunction) {
	if (req.body.layout) {
		writeFileSync("./layouts/layout.lyt", JSON.stringify(req.body.layout), {
			flag: "w",
		});

		updateLayout();
	}
	
	res.json(layout);
}

function updateLayout() {
	try {
		layout = JSON.parse(readFileSync("./layouts/layout.lyt", "utf-8"));
	} catch (err) {
		console.error(err);
	}
}
