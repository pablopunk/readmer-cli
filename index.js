#!/usr/bin/env node

const args = require('args')
const readmer = require('readmer')

args
  .option('gravatar', 'A gravatar email to retrieve a profile picture')
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
    },
    {
      usage: 'readmer -g me@example.com > readme.md',
      description: 'Create readme.md with the author\'s gravatar'
    }
  ])

const flags = args.parse(process.argv)

const packageJson = args.sub[0] || `${process.cwd()}/package.json`

readmer(packageJson, {gravatarEmail: flags.gravatar}).then(console.log)
