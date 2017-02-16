export default (currentUser=null, action) => {
  switch (action.type) {
    case "AUTH_USER":
      return action.payload
    default:
      return currentUser
  }
}
