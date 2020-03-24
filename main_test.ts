import { assertEquals } from 'https://deno.land/std/testing/asserts.ts'

import { Generate, Validate } from './main.ts'
import GenerateFn from './generate.ts'
import ValidateFn from './validate.ts'

Deno.test({
  name: 'should export Generate function',
  fn(): void {
    assertEquals(Generate, GenerateFn)
  }
})

Deno.test({
  name: 'should export Validate function',
  fn(): void {
    assertEquals(Validate, ValidateFn)
  }
})
