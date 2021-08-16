import { ADD_TASK, EDIT_TASK, DELETE_TASK, DONE_TASK} from "../actionType/actionType";

const initialState = {
    listTasks : [{id:1,text:"take a coffee", isDone:false}],
}

const TaskReducer = (state=initialState, {type,payload}) => {
    switch (type) {
        case ADD_TASK :
            return {...state, listTasks: [...state.listTasks,payload]}
        case EDIT_TASK :
            return {...state, listTasks: state.listTasks.map((el) =>
                el.id === payload.id ? {...el , text: payload.newTask} : el )}
        case DELETE_TASK :
            return { ...state, listTasks: state.listTasks.filter((el)=> el.id !== payload)};
        case DONE_TASK :
            return {...state, listTasks: state.listTasks.map((el)=> el.id===payload ? {...el, isDone: !el.isDone} : el) };         


        default:
            return state
    }
}

export default TaskReducer;