import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStoredCart()
        const savedCart = []
        for (const id in storedCart) {
            const exitsProducts = products.find(product => product._id === id)
            if (exitsProducts) {
                const quantity = storedCart[id]
                exitsProducts.quantity = quantity
                savedCart.push(exitsProducts)
            }
        }
        setCart(savedCart)
    }, [products])

    return [cart, setCart]
}

export default useCart;