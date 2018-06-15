import { default as playSound, makeSound, SOUNDS } from '../playSound'

describe('makeSound', () => {
  it('should return undefined if the sound does not exist', () => {
    expect(makeSound()).not.toBeDefined()
  })

  it('should play sound, if it exists', () => {
    const spy = jest.spyOn(Audio.prototype, 'play')
    makeSound('notification')

    expect(spy.mock.calls[0]).toBeDefined()

    spy.mockRestore()
  })

  it('should be able to adjust sound volume', () => {
    const sound = makeSound('notification', 0.1)

    expect(sound.volume).toEqual(0.1)
  })
})

describe('playSound', () => {
  it('should return an object', () => {
    expect(typeof playSound).toEqual('object')
  })

  it('should play a sound, if it exists', () => {
    const spy = jest.spyOn(Audio.prototype, 'play')

    playSound.notification()

    expect(spy.mock.calls[0]).toBeDefined()

    spy.mockRestore()
  })
})
