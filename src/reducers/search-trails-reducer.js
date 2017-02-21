export default (trails={search: [], featured: []}, action) => {
  switch (action.type) {
    case "FILTER_TRAILS":
      return {...trails, search: action.payload}
    default:
      return trails
  }
}
