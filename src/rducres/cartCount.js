

export default function(state=0,action){

    let newState = state;//初始值
    let foods = action.data;//商品的数量

    switch (action.type) {
        case "CART_ADD":

            ++newState;
            newState = Math.min(10,newState);
            return newState;
        case "CART_REDUCE":

           --newState;
            newState = Math.max(0,newState);
            return newState;
        default :
            return newState;
    }
}