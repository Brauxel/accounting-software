import { logger } from './utils/logger/buildLogger'

process.on('uncaughtException', (err) => {
  console.error('There was an uncaught error', err)
  process.exit(1)
})

export const handler = () => {
  logger.info('test logger3')
  console.log('handler fired 2')
}

handler()
