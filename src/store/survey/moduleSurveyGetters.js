export default {
  surveyArrayLength: state => state.surveyArray.length,
  surveyList: state => state.surveyArray.filter((item) => {
    console.log('filter');
    if (item.tags.filter(tag => state.tags.filter(f => f.sorted).map(t => t.i_idx).indexOf(tag.i_idx) > -1).length > 0) {
      if (item.ca_title.indexOf(state.surveySearchQuery) > -1) { return true; }
    }
  }),
  getSurveyBySection: state => sectionId => state.todoArray.filter(todoItem => todoItem.sectionId === sectionId),
  tags: state => state.tags,
  surveyOrderBy: state => state.orderBy,
};
