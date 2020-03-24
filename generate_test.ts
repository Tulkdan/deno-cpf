import { assert, assertThrows, assertEquals, assertMatch } from 'https://deno.land/std/testing/asserts.ts'

import GenerateCpf from './generate.ts'
import Validate from './validate.ts'

Deno.test({
  name: 'should return a string',
  fn(): void {
    const newCpf = GenerateCpf()
    assertEquals(typeof newCpf, 'string')
  }
})

for (let i = 0; i < 10; i++) {
  Deno.test({
    name: 'should generate a valid CPF',
    fn(): void {
      const newCpf = GenerateCpf()
      assert(Validate(newCpf))
    }
  })

  Deno.test({
    name: 'should generate a valid CPF with mask',
    fn(): void {
      const newCpf = GenerateCpf(true)
      assertMatch(newCpf, /\d{3}\.\d{3}\.\d{3}-\d{2}aa/)
      assert(Validate(newCpf))
    }
  })
}
