#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'node:fs'

const packagePath = new URL('../package.json', import.meta.url)
const packageJson = JSON.parse(readFileSync(packagePath, 'utf8'))
const nextVersion = process.argv[2]

if (!nextVersion) {
    console.error('Usage: node scripts/bump-version.mjs <next-version>')
    process.exit(1)
}

if (!/^\d+\.\d+\.\d+$/.test(nextVersion)) {
    console.error(`Unsupported version format: ${nextVersion}`)
    process.exit(1)
}

packageJson.version = nextVersion
writeFileSync(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`)
process.stdout.write(nextVersion)
