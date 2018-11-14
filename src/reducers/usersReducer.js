const usersFetch = (state = [], action) => {
    switch(action.type) {
      case 'USERS_FETCH':
        return state.concat([action.data]);
      default:
        return state;
    }
  }
  export default usersFetch;
  