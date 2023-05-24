import fs from "fs/promises"
import path from "path"

function Home(props) {
    return (
        <div>
            <ul>
                {
                    props.products.map(p => {
                        return <li key={p.id}>
                            {p.title}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), "data", "dummy-data.json")
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    return {
        props: {
            products: data.products
        }
    }
}

export default Home