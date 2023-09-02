import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProdcuts] = useState([]);

    useEffect(() => {
        const url = `https://opvoap-server.onrender.com/products`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProdcuts(data));
    }, []);

    return [products, setProdcuts];
}
export default useProducts;