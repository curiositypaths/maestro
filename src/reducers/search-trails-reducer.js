export default (trails={search: [], featured: []}, action) => {
  switch (action.type) {
    case "FILTER_TRAILS":
      return {...trails, search: action.payload}
    case "FETCH_FEATURED_TRAILS":
      return {...trails, featured: action.payload}
    default:
      return trails
  }
}
