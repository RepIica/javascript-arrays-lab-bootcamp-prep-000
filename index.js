const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.shift(name)
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name) {
  kittens.unshift(name)
}