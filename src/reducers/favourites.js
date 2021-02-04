export default function (state = {}, action) {
    switch (action.type) {
      case "ADD_ITEM_TO_FAVOURITES":
        return {
          ...state,
          jobs: state.jobs.concat(action.payload),
        };
      case "REMOVE_ITEM_FROM_FAVOURITES":
        return {
          ...state,
            jobs: state.jobs.filter((job) => job.id !== action.payload),
        };
        case "JOB_NOT_FOUND":
            return {
                error: action.payload+ ": there are no jobs with these parameters",
            };
      default:
        return state;
    }
  }
  