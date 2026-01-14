#!/usr/bin/env node
import { Command } from 'commander'
import chalk from 'chalk'

const program = new Command()

program
  .name('anonymizer')
  .description('CLI-first database anonymization tool')
  .version('0.1.0')

program
  .command('run')
  .option('-c, --config <file>', 'Config file', 'anonymizer.config.ts')
  .option('--direct', 'Run in direct DB mode (dangerous)')
  .action(async (options) => {
    if (options.direct) {
      console.log(
        chalk.yellow.bold(
          '\n⚠️  WARNING: Direct mode will modify a database in-place.\n'
        )
      )
      console.log(
        chalk.red(
          'This should NEVER be used against production databases.\n'
        )
      )
    }

    console.log(chalk.green('Starting anonymization…'))
    // next: load config, validate, run
  })

program.parse()
