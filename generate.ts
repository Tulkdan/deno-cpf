import { CPF_LENGTH } from './constants.ts'
import { findValidatorValue } from './utils.ts'

function generateValidators (numbers: Array<number>, size = CPF_LENGTH): Array<number> {
  const validator = findValidatorValue(numbers, size)
  return [...numbers, validator]
}

function generateCpf (): string {
  const randomNumbers = `${Math.floor(Math.random() * 1000000000)}`.split('').map(n => Number(n))
  const generateCpf = generateValidators(generateValidators(randomNumbers, CPF_LENGTH - 1))
  return generateCpf.join('')
}

export default generateCpf
