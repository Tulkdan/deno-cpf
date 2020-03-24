import { assert, assertThrows, assertEquals } from 'https://deno.land/std/testing/asserts.ts'

import GenerateCpf from './generate.ts'
import Validate from './validate.ts'

Deno.test({
  name: 'should return a string',
  fn(): void {
    const newCpf = GenerateCpf()
    assertEquals(typeof newCpf, 'string')
  }
})

Deno.test({
  name: 'should generate a valid CPF',
  fn(): void {
    assert(Validate(GenerateCpf()))
  }
})
