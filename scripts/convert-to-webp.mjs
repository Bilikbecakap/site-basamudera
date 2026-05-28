import sharp from 'sharp'
import { readdir, stat } from 'fs/promises'
import { join, extname, basename } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '..', 'public')

const targets = [
  { input: 'images/hero-1.png',               output: 'images/hero-1.webp',               width: 1920, quality: 80 },
  { input: 'images/hero-2.png',               output: 'images/hero-2.webp',               width: 1920, quality: 80 },
  { input: 'images/hero-3.png',               output: 'images/hero-3.webp',               width: 1920, quality: 80 },
  { input: 'images/hero-4.png',               output: 'images/hero-4.webp',               width: 1920, quality: 80 },
  { input: 'images/bilikbecakap-proyek.png',   output: 'images/bilikbecakap-proyek.webp',   width: 900,  quality: 82 },
  { input: 'images/bilikmapur-proyek.png',     output: 'images/bilikmapur-proyek.webp',     width: 900,  quality: 82 },
  { input: 'images/mitra/danaindonesiana.png', output: 'images/mitra/danaindonesiana.webp', width: 400,  quality: 85 },
  { input: 'images/mitra/kemenbud.png',        output: 'images/mitra/kemenbud.webp',        width: 400,  quality: 85 },
  { input: 'images/mitra/kemenristek.png',     output: 'images/mitra/kemenristek.webp',     width: 400,  quality: 85 },
  { input: 'images/mitra/kemahbudaya.png',     output: 'images/mitra/kemahbudaya.webp',     width: 400,  quality: 85 },
  { input: 'images/mitra/belitungtimur.png',   output: 'images/mitra/belitungtimur.webp',   width: 400,  quality: 85 },
  { input: 'logo/logo-basamudera.png',         output: 'logo/logo-basamudera.webp',         width: 400,  quality: 90 },
]

async function convert() {
  for (const t of targets) {
    const inputPath  = join(publicDir, t.input)
    const outputPath = join(publicDir, t.output)

    const before = (await stat(inputPath)).size
    await sharp(inputPath)
      .resize({ width: t.width, withoutEnlargement: true })
      .webp({ quality: t.quality })
      .toFile(outputPath)
    const after = (await stat(outputPath)).size

    const saved = (((before - after) / before) * 100).toFixed(1)
    console.log(`✓ ${t.input}  ${(before/1024).toFixed(0)}KB → ${(after/1024).toFixed(0)}KB  (-${saved}%)`)
  }
  console.log('\nSelesai!')
}

convert().catch(console.error)
