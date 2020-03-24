import { CPF_LENGTH } from './constants.ts'
import { findValidatorValue } from './utils.ts'

function validateCpf (cpf: string): boolean {
  const SPECIAL_CHARS = /[.|-]/g
  const cleanCpf = cpf.match(SPECIAL_CHARS) ? cpf.replace(SPECIAL_CHARS, '') : cpf

  if (cleanCpf.length !== CPF_LENGTH || cpf.match(/[a-zA-Z]/g))
    return false

  const chars = cleanCpf.split('').map(n => Number(n))
  const validators = chars.splice(chars.length - 2)
  const numbers = chars

  const firstPart = findValidatorValue(numbers, CPF_LENGTH - 1)

  if (firstPart !== validators[0])
    return false

  const secondPart = findValidatorValue([...numbers, validators[0]])

  if (secondPart !== validators[1])
    return false

  return true
}

export default validateCpf
