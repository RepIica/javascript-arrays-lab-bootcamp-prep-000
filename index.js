const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name)
}
function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}
function destructivelyRemoveLastKitten(name) {
  kittens.pop(name)
}
function destructivelyRemoveFirstKitten(name) {
  kittens.shift(name)
}

function appendKitten(name) {
  var newArray = [...kittens, name]
  return newArray
}
function prependKitten(name) {
  newArray = [name, ...kittens]
  return newArray
}
function removeLastKitten(name) {
  newArray = []
  return kittens.slice(0, kittens.length-1)
  array.slice(start, end)
}
function removeFirstKitten(name) {
  newArray = []
  return newArray
}