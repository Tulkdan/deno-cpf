import { assert, assertThrows } from 'https://deno.land/std/testing/asserts.ts'

import ValidateCpf from './validate.ts'

for (const cpf of [
  '52998224725',
  '662.234.960-60',
  '516466350-35',
  '197.644.15016'
]) {
  Deno.test({
    name: `should return true with a valid CPF: ${cpf}`,
    fn(): void {
      assert(ValidateCpf(cpf))
    }
  })
}

for (const cpf of [
  '52998224727',
  '52998224745',
  '52992244725',
  '1123123',
  '112312329380459',
  '52992244a25',
]) {
  Deno.test({
    name: `should return false when CPF is wrong: ${cpf}`,
    fn(): void {
      assertThrows(() => {
        assert(ValidateCpf(cpf))
      })
    }
  })
}
