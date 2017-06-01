#!/usr/bin/env node

const args = require('args')
const readmer = require('readmer')

args
  .examples([
    {
      usage: 'readmer',
      description: 'Show simple readme file'
    },
    {
      usage: 'readmer > README.md',
      description: 'Create README.md'
    },
    {
      usage: 'readmer ../package.json > ../README.md',
      description: 'Create README.md fo the parent directory'
    }
  ])

args.parse(process.argv)

let packageJson = args.sub[0] || `${process.cwd()}/package.json`

readmer(packageJson).then(console.log)
