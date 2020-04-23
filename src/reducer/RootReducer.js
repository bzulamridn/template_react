const initialState = {
    counter :0
}

export default function RootRecucer(state = initialState, action){

    switch(action.type){
        case 'TAMBAH' :
            return {counter: 2}
        case 'DECREMENT' :
            return {counter: state.counter - 1}
        default:
            return false;
    }

}