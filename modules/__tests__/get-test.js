import expect from 'expect'
import db from './db'

describe('get', () => {
  describe('when a key does not exist', () => {
    it('returns null', () =>
      db.get('does-not-exist').then((reply) => {
        expect(reply).toBe(null)
      })
    )
  })

  describe('when a key exists', () => {
    let key, expectedReply
    beforeEach(() => {
      key = 'a-key'
      expectedReply = 'hello world'
      return db.set(key, expectedReply)
    })

    it('returns its value', () =>
      db.get(key).then((reply) => {
        expect(reply).toBe(expectedReply)
      })
    )
  })
})
