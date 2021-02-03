export default function (state = {}, action) {
    switch (action.type) {
      case "ADD_ITEM_TO_FAVOURITES":
        return {
          ...state,
          favourites: {
            ...state.favourites,
            jobs: state.favourites.jobs.concat(action.payload),
          },
        };
      case "REMOVE_ITEM_FROM_FAVOURITES":
        return {
          ...state,
          favourites: {
            ...state.favourites,
            jobs: [
              ...state.favourites.jobs.filter(
                (jobId) => jobId !== action.payload
              ),
            ],
          },
        };
      default:
        return state;
    }
  }
  