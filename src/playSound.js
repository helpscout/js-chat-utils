export const SOUNDS = {
  notification:
    'https://beacon-v2.helpscout.net/static/ui-sounds/beacon-notification.ogg',
}
export const DEFAULT_VOLUME = 0.5

/**
 * Generates an Audio instance and plays the sound, if available.
 *
 * @param {string} soundName
 * @param {number} volume
 * @returns {Audio}
 */
export const makeSound = (soundName, volume = DEFAULT_VOLUME) => {
  const source = SOUNDS[soundName]
  if (!window.Audio || !soundName || !source) return

  const sound = new Audio(source)
  sound.volume = volume
  sound.play()

  return sound
}

export default {
  notification: (...args) => makeSound('notification', ...args),
}
