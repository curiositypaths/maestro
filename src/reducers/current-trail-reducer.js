export default (currentTrail=null, action) => {
  switch(action.type) {
    case "FETCH_CURRENT_TRAIL":
      return action.payload
    default:
      return currentTrail
  }
}