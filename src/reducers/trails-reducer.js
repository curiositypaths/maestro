export default (trails=null, action) => {
  switch (action.type) {
    case "ALL_TRAILS":
      return action.payload
    case "CREATE_TRAIL":
      return action.payload
    case "FETCH_TRAIL":
      return action.payload
    default:
      return null
  }
}
