export default (trail=null, action) => {
  switch (action.type) {
    case "CREATE_TRAIL":
      return trail.id
    default:
      return null
  }
}
