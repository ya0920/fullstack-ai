export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}


export function createRandomPicker(arr) {
  arr = [...arr]
  function randomPick() {
    const len = arr.length - 1
    const index = randomInt(0, len)
    const picked = arr[index];
    [arr[index], arr[len]] = [arr[len], arr[index]]
    return picked
  }
  return randomPick
}