import _ from 'lodash'

export function uid() {
  return Math.floor(Math.random() * 999999999).toString(36)
}

export const diceroll = p => _.flow(Math.random, i => i * 100, Math.floor, i => i <= p)()
