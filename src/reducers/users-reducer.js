export default (users=[], action) => {
  switch (action.type) {
    case "CREATE_USER":
      return users
    case "LOGIN_USER":
      return users
    default:
      return users
  }
}
