export default (sections=[{title: ""}], action) => {
  switch (action.type) {
    case "ADD_SECTION":
      return action.payload
    case "FETCH_SECTIONS":
      return action.payload
    default:
      return categories
  }
}
