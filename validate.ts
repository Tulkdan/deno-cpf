import { CPF_LENGTH } from './constants.ts'

function sumNumbers (list: Array<number>, diff = 0): number {
  const sum = list.reduce(
    (acc: number, n: number, index: number) => acc + n * (CPF_LENGTH - index - diff),
    0
  )

  return sum * 10 % 11
}

function validateCpf (cpf: string): boolean {
  const SPECIAL_CHARS = /[.|-]/g
  const cleanCpf = cpf.match(SPECIAL_CHARS) ? cpf.replace(SPECIAL_CHARS, '') : cpf

  if (cleanCpf.length !== CPF_LENGTH || cpf.match(/[a-zA-Z]/g))
    return false

  const chars = cleanCpf.split('').map(n => Number(n))
  const validators = chars.splice(chars.length - 2)
  const numbers = chars

  const firstPart = sumNumbers(numbers, 1)

  if (firstPart !== validators[0])
    return false

  const secondPart = sumNumbers([...numbers, validators[0]])

  if (secondPart !== validators[1])
    return false

  return true
}

export default validateCpf
