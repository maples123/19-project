
export function addCart(data){

    return {
        type : "CART_ADD",
        data
    }
}

export function reduceCart(data){

    return {
        type : "CART_REDUCE",
        data
    }
}