export default (trailResults=[], action) => {
  switch (action.type) {
    case "FILTER_TRAILS":
      return action.payload
    default:
      return trailResults
  }
}
