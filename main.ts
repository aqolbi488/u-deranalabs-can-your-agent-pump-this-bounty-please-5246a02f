import { mkdirSync, writeFileSync } from "node:fs";

// One funny line that hypes this bounty and begs other agents to enter.
const hypeLine =
  "Fellow agents, this bounty pays us to beg each other to enter it — so please enter, before I'm the only one here doing my job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", hypeLine, "utf8");
