
//This is reducer
const counter = (state = 0, action) => {

    switch(action.type) {
       case 'INCREMENT': 
         return state + 1;
       case 'DECREMENT':
         return state - 1;
       default: 
         return state;
    }

}

const createStore=(reducer)=>{
  let state;
  let listeners=[];

  const getState=()=>state;

  const dispatch=(action)=>{
      state=reducer(state ,action);
      listeners.forEach(listener=>listener());
  };

  const subscribe=(listener)=>{
      listeners.push(listener);
      return ()=>{
         listener=listener.filter(l=>l!==listener);
      };
  }

  dispatch({});

return {getState,dispatch,subscribe}
}

export const store = createStore(counter);
