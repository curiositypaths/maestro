export default (categories=[], action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return action.payload
    case "ADD_CATEGORIES":
      return [...action.payload, {name: "", users: 0 }]
    default:
      return categories
  }
}
