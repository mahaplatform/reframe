import Logger from './logger'

export function swallow(event) {
  Logger.notice('Swallowed event ', ...arguments)
  event.preventDefault()
  event.stopPropagation()
  return false
}
