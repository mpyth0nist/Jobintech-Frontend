import Product from "./Product";

function ProductList(){
    return (
        <ul>
            <li>
                <Product name="Laptop" price={200} />
            </li>
            <li>
                <Product name="Phone"  price={90} />
            </li>
            <li>
                <Product name="Sony Console"  price={140} />
            </li>
            <li>
                <Product name="USB Stick"  price={40} />
            </li>
        </ul>
    )

}

export default ProductList;