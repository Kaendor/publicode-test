import { getModelFromSource } from "@publicodes/tools/compilation";
import Engine from "publicodes";

// Publicode nécessite une phase de compilation du yaml vers JSON, faisable en amont de l'évaluation des règles, ici fait en même temps.
export const parsedRules = () => {
  const rules = getModelFromSource("rules/test.yaml", {
    verbose: true,
  });

  return new Engine(rules);
};
