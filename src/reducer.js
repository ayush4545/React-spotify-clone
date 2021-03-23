export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    //token:'BQCVZLZWhIa9quDklAMYtX3i6A_-ZxlXwMseMSDVhnGrDMwNbqmSk8-OT4gQWzsHjzBWAeRaS6EzQJ6WeEUdbt9r74Z6HZA83piEjLO4DTTII5zjlNKSykVQ0iE9lKihuWadwHJLkzNTeEkwrv4zGVUX2DI67qeGlgTJEjU8r5OWBdqOQpaq'
}

const reducer=(state,action)=>{
  console.log('inside reducer.js>>>> ',action);

  //Action-> type,[payload]
  switch(action.type){
      case 'SET_USER':
          return{
              ...state,
              user:action.user,
          }
      case 'SET_TOKEN':
          return{
             ...state,
             token:action.token,
          }
      case 'SET_PLAYLISTS':
          return{
              ...state,
              playlists:action.playlists,
          }
       case 'SET_DISCOVER_WEEKLY':
           return{
               ...state,
               discover_weekly:action.discover_weekly,
           }   
      default:
          return state;    
  }
}

export default reducer;