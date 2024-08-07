import { expect, test } from "vitest";
import { parsedRules } from "./main.js";

test("Le client est exonéré de CFE si son CA est trop faible et la création de son entreprise est sur l'année courante", () => {
	const engine = parsedRules();
	engine.setSituation({
		'CA annuel HT N-2': 4800, 
		'CA annuel HT N-1': 2600, 
		'année création': 2023, 
		'année courante': 2024, 

	});

	const exonere = engine.evaluate('Exonéré CFE');

	expect(exonere.nodeValue).toBe(true);


});
