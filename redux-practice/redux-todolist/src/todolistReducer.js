const initialState = {
    task : {
        id: 0,
        content: ""
    }
}

function generateId(){
    return Math.random().toString(36).substring(2)
}


export function todolistReducer(state = initialState, action){

    switch(action.type){
        case "counter/add":
            return {...state, task: {
                id: generateId(),
                content: action.payload.content
            }}
        
        case "counter/delete":
            return state.filter(task => task.id !== action.payload.id)
    }

}