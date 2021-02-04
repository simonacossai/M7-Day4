export default function (state = {}, action) {
    switch (action.type) {
      case 'STORE_SEARCH_RESULT':
      return {
            ...state,
            items: action.payload,
          };
      default:
        return state
    }
  }
  