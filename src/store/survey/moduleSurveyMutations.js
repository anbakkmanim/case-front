export default {
  SET_SURVEY(state, taskObj) {
    state.surveyArray = taskObj;
  },
  SET_TAG(state, tags) {
    const newTag = tags.map(v => ({ ...v, sorted: false }));
    state.tags = newTag;
  },
  TAG_UPDATE_CHECKED(state, tagInfo) {
    state.tags[tagInfo.idx].sorted = tagInfo.value;
  },
  APPLY_SURVEY_FILTER(state, filterName) {
    state.orderBy = filterName;
  },
  SET_SURVEY_SEARCH_QUERY(state, query) {
    state.surveySearchQuery = query;
  },
};
