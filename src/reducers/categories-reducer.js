export default (categories=["Programming", "Design"], action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return categories
    default:
      return categories
  }
}
