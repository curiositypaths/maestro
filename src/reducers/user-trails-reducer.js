export default (trails=[], action) => {
  switch (action.type) {
    case "GET_TRAILS_USER_FOLLOWS":
      return action.payload
    default:
      return trails
  }
}
