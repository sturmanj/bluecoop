import type { Request, Response, NextFunction } from "express";
import type {
	GoogleSpreadsheet,
	GoogleSpreadsheetWorksheet,
} from "google-spreadsheet";
import { GoogleSpreadsheet as GoogleSheet } from "google-spreadsheet";
const keys = require("../../../keys.json");

let sheet: GoogleSpreadsheetWorksheet;
const doc: GoogleSpreadsheet = new GoogleSheet(
	"1-uBhDcmhf4BHlw1pW6sXDo0h14xJ2i0NOmvTtyZLSng"
);

(async function () {
	await doc.useServiceAccountAuth(keys);

	await doc.loadInfo();
	sheet = doc.sheetsByTitle["bluecoop"];
})();

export function post(req: Request, res: Response, next: NextFunction) {
    if (sheet && req.body.data) {
		sheet.addRow(req.body.data);
		res.json({ success: true });
		return;
	}
	res.json({ success: false });
}
