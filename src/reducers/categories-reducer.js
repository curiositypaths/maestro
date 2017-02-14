export default (categories=["Programming", "Design", "Music"], action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return categories
    default:
      return categories
  }
}
