const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const diagramsDir = path.join(__dirname, "diagrams");
const outputDir = path.join(__dirname, "images");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(diagramsDir).filter((f) => f.endsWith(".mmd"));

for (const file of files) {
  const input = path.join(diagramsDir, file);
  const output = path.join(outputDir, file.replace(".mmd", ".png"));
  console.log(`Generating ${file} → ${path.basename(output)}`);
  execSync(
    `npx mmdc -i "${input}" -o "${output}" -b white -s 2`,
    { stdio: "inherit" }
  );
}

console.log("Done!");
