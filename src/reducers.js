export const drawer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_DRAWER':
      return true;
    case 'CLOSE_DRAWER':
      return false;
    default:
      return !!state;
  }
};

export const navigation = (state, action) => {
  switch (action.type) {
    case 'HOME_NAVIGATION':
      return 'home';
    case 'CONTENT_NAVIGATION':
      return 'content';
    case 'PREVIEW_NAVIGATION':
      return 'preview';
    default:
      return state || 'home';
  }
}

export const resource = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      let addNewItem = Object.assign({}, action.data,{
        id: +new Date,
      });
      return state.concat([addNewItem]);
    case 'UPDATE_ITEM':
      let itemUpdate = action.data;
      return state.map(resource => (resource.id.toString() !== itemUpdate.id) ?
        resource : Object.assign({}, itemUpdate)
      );
    case 'DELETE_ITEM':
      let itemDelete = action.data;
      return state.filter(resource => resource.id.toString() !== action.id);
    default:
      return state || [];
  }
};

export const resourceFilter = (state, action) => {
  switch (action.type) {
    case 'FILTER_ITEM':
      return action.data;
    default:
      return state || '';
  }
};

export const resourceSort = (state, action) => {
  switch (action.type) {
    case 'SORT_ITEM_NAME':
      return 'name';
    case 'UNSORT_ITEM_NAME':
      return '';
    default:
      return state || '';
  }
};

export const item = (state, action) => {
  switch (action.type) {
    case 'SELECT_ITEM':
      return Object.assign({}, state, {active: action.id})
    default:
      return state || {};
  }
};
