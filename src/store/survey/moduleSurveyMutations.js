export default {
  SET_SURVEY(state, taskObj) {
    const newSurvey = Object.assign({}, taskObj);
    state.surveyArray = newSurvey;
  },
  SET_TAG(state, tags) {
    const newTag = tags.map(v => ({ ...v, sorted: true }));
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
