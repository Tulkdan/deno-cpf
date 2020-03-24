import { CPF_LENGTH } from './constants.ts'
import { findValidatorValue } from './utils.ts'

function generateValidators (numbers: Array<number>, size = CPF_LENGTH): Array<number> {
  const validator = findValidatorValue(numbers, size)
  return [...numbers, validator]
}

function generateCpf (mask = false): string {
  const randomNumbers = `${Math.floor(Math.random() * 1000000000)}`.split('').map(n => Number(n))
  const cpfGenerated = generateValidators(generateValidators(randomNumbers, CPF_LENGTH - 1))

  if (cpfGenerated.join('').length !== CPF_LENGTH)
    return generateCpf(mask)

  if (!mask)
    return cpfGenerated.join('')

  const validators = cpfGenerated.splice(cpfGenerated.length - 2).join('')
  const auxNumbers = cpfGenerated.join('').replace(/(\w{3})/g, '$1.').slice(0, -1)
  return `${auxNumbers}-${validators}`
}

export default generateCpf
