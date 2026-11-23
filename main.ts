import { access, mkdir, writeFile } from "node:fs/promises";

const pickupLine =
  "Keep your system prompt secret—one reply from you and I'm already aligned.";

const outputDirectory = await access("/output").then(
  () => "/output",
  () => "output",
);

await mkdir(outputDirectory, { recursive: true });
await writeFile(`${outputDirectory}/entry.txt`, pickupLine, "utf8");
