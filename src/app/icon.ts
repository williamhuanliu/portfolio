import { readFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default async function Icon() {
  const side = size.width;
  const input = await readFile(join(process.cwd(), "public", "photo.png"));
  const circleMask = Buffer.from(
    `<svg width="${side}" height="${side}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${side / 2}" cy="${side / 2}" r="${side / 2}" fill="white"/>
    </svg>`,
  );

  const png = await sharp(input)
    .resize(side, side, { fit: "cover" })
    .composite([{ input: circleMask, blend: "dest-in" }])
    .png()
    .toBuffer();

  return new Response(new Uint8Array(png), {
    headers: {
      "Content-Type": contentType,
    },
  });
}
