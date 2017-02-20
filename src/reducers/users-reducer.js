export default (users={currentUser: {user_id: null}, allUsers: [], currentlyViewedUser: null}, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { ...users, currentUser: action.payload.data.user }
    case "LOGIN_USER":
      return { ...users, currentUser: action.payload.data.user }
    // case "LOGOUT_USER":
    //   return { ...users, currentUser: action.payload.data.user }
    case "FETCH_USER":
      return { ...users, currentlyViewedUser: action.payload }
    case "AUTH_USER":
      return { ...users, currentUser: action.payload }
    default:
      return users
    }
}
