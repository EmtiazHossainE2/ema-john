import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStoredCart()
        const savedCart = []
        //14
        const keys = Object.keys(storedCart)
        console.log(keys);
        fetch('http://localhost:5000/productsByKeys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                console.log(products);
                for (const id in storedCart) {
                    const exitsProducts = products.find(product => product._id === id)
                    if (exitsProducts) {
                        const quantity = storedCart[id]
                        exitsProducts.quantity = quantity
                        savedCart.push(exitsProducts)
                    }
                }
                setCart(savedCart)
            })

    }, [])

    return [cart, setCart]
}

export default useCart;