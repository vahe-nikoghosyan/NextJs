import fs from "fs/promises"
import path from "path"


function ProductDetail(props) {
    const {loadedProduct} = props
    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    )
}

export async function getStaticProps(context) {
    const {params} = context;
    const productId = params.pId;

    const filePath = path.join(process.cwd(), "data", "dummy-data.json")
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    const product = data.products.find(product => product.id === productId)
    return {
        props: {
            loadedProduct: product
        }
    }
}

export default ProductDetail