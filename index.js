var recipes = {eggs: '3', cheese: '1/4 cup', milk: '1/2 cup'}

function updateObjectWithKeyAndValue(object, key, value) {
  console.log(recipes)
  return Object.assign({}, key, value)
  recipes
}
