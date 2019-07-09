export default {
  surveyArrayLength: state => state.surveyArray.length,
  surveyList: state => state.todoArray.filter((item) => {
    if (item.tags.filter(tag => state.tags.map(t => t.i_idx).indexOf(tag.i_idx) > -1).length > 0) {
      if (item.ca_title.indexOf(state.surveySearchQuery) > -1) { return true; }
    }
  }).reverse(),
  getSurveyBySection: state => sectionId => state.todoArray.filter(todoItem => todoItem.sectionId === sectionId),
  tags: state => state.tags,
  surveyOrderBy: state => state.orderBy,
};
