export default (currentTrail=null, action) => {
  switch(action.type) {
    case "FETCH_CURRENT_TRAIL":
      return action.payload
    case "ADD_SECTION":
      return action.payload
    case "ADD_RESOURCE":
      return action.payload
    case "VOTE_FOR_TRACK":
      return action.payload
    default:
      return currentTrail
  }
}
