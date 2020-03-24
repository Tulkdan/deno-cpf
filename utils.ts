import { CPF_LENGTH } from './constants.ts'

export function findValidatorValue (numbers: Array<number>, size = CPF_LENGTH): number {
  const sum = numbers.reduce(
    (acc: number, n: number, index: number) => acc + n * (size - index),
    0
  )
  return sum * 10 % 11
}
