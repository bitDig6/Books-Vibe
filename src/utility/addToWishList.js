import { toast } from "react-toastify";

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wishlist');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    return [];
}

const addToWishList = id => {
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        console.log(id, ' already added to wishlist');
        toast('book already added to wishlist');
    }else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wishlist', storedWishListStr);
    }
}

export {getStoredWishList , addToWishList };