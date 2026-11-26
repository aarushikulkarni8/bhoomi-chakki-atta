// Checks that the README exists, its local links work and its npm commands are real.
import { existsSync, readFileSync } from 'node:fs'

const readme = readFileSync('README.md', 'utf8')
const { scripts } = JSON.parse(readFileSync('package.json', 'utf8'))
const problems = []

for (const [, target] of readme.matchAll(/\]\((?!https?:|mailto:|#)([^)#]+)[^)]*\)/g)) {
  if (!existsSync(target)) problems.push(`Broken link: ${target}`)
}
for (const [, name] of readme.matchAll(/npm run ([\w:-]+)/g)) {
  if (!scripts[name]) problems.push(`Unknown npm script: ${name}`)
}

if (problems.length) {
  console.error(problems.join('\n'))
  process.exit(1)
}
console.log('Docs are consistent')
