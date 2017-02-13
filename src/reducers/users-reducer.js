export default (users=[], action) => {
  switch (action.type) {
    case "CREATE_USER":
      return users
    default:
      return users
  }
}
