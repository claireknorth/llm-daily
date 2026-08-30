// Generates PNG app icons (lightning bolt on dark) without any dependencies.
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";

const BG = [18, 16, 31];
const BOLT = [216, 255, 62];

// Point-in-polygon test for the bolt shape (coords in 0..100 space)
const bolt = [
  [54, 12],
  [26, 56],
  [44, 56],
  [38, 88],
  [72, 40],
  [52, 40],
  [60, 12],
];
function inBolt(x, y) {
  let inside = false;
  for (let i = 0, j = bolt.length - 1; i < bolt.length; j = i++) {
    const [xi, yi] = bolt[i];
    const [xj, yj] = bolt[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)
      inside = !inside;
  }
  return inside;
}

function crc32(buf) {
  let c,
    crc = 0xffffffff;
  for (let n = 0; n < buf.length; n++) {
    c = (crc ^ buf[n]) & 0xff;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    crc = (crc & 0xffffff00) | c;
    crc = (crc >>> 8) ^ ((0xedb88320 & -(crc & 1)) >>> 0);
  }
  return crc;
}
// simpler, correct table-based crc32
function makeCrcTable() {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
}
const CRC_TABLE = makeCrcTable();
function crc(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++)
    c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc(body));
  return Buffer.concat([len, body, crcBuf]);
}

function makePng(size) {
  const raw = Buffer.alloc(size * (size * 3 + 1));
  let p = 0;
  for (let y = 0; y < size; y++) {
    raw[p++] = 0; // no filter
    for (let x = 0; x < size; x++) {
      const u = (x / size) * 100;
      const v = (y / size) * 100;
      const px = inBolt(u, v) ? BOLT : BG;
      raw[p++] = px[0];
      raw[p++] = px[1];
      raw[p++] = px[2];
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type RGB
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

mkdirSync("public", { recursive: true });
writeFileSync("public/apple-touch-icon.png", makePng(180));
writeFileSync("public/icon-192.png", makePng(192));
writeFileSync("public/icon-512.png", makePng(512));
console.log("icons written");
