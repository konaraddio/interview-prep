import checkPermutation from './02'

test('returns true for "abcd" & "dacb"', () => {
  expect(checkPermutation('abcd', 'dacb')).toBeTruthy()
})

test('returns false for "aaa" & "aad"', () => {
  expect(checkPermutation('aaa', 'aad')).toBeFalsy()
})

test('returns false for " " & "   "', () => {
  expect(checkPermutation(' ', '   ')).toBeFalsy()
})