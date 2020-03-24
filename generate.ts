import { CPF_LENGTH } from './constants.ts'
import { findValidatorValue } from './utils.ts'

function generateCpf (mask = false): string {
  const MAX = 999999999
  const MIN = 100000000
  const randomNumbers = `${Math.floor(Math.random() * (MAX - MIN)) + MIN}`.split('').map(n => Number(n))

  const firstValidator = findValidatorValue(randomNumbers, CPF_LENGTH - 1)

  if (firstValidator >= 10)
    return generateCpf(mask)

  const secondValidator = findValidatorValue([...randomNumbers, firstValidator], CPF_LENGTH)

  if (secondValidator >= 10)
    return generateCpf(mask)

  const cpfGenerated = [...randomNumbers, firstValidator, secondValidator]

  if (!mask)
    return cpfGenerated.join('')

  const validators = cpfGenerated.splice(cpfGenerated.length - 2).join('')
  const auxNumbers = cpfGenerated.join('').replace(/(\w{3})/g, '$1.').slice(0, -1)
  return `${auxNumbers}-${validators}`
}

export default generateCpf
