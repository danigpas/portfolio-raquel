import { readFile, mkdir } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import path from "node:path"
import sharp from "sharp"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const svg = await readFile(path.join(root, "scripts", "og.svg"))
await mkdir(path.join(root, "public"), { recursive: true })
await sharp(svg, { density: 144 })
  .resize(1200, 630, { fit: "cover" })
  .png()
  .toFile(path.join(root, "public", "og.png"))
console.log("✓ public/og.png generado")
