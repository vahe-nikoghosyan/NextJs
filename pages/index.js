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

export async function getStaticProps(context) {
    console.log("(Re-)Generating...")
    const filePath = path.join(process.cwd(), "data", "dummy-data.json")
    const jsonData = await fs.readFile(filePath)
    const data = JSON.parse(jsonData)

    if (!data) {
        return {
            redirect: {
                destination: "/no-data"
            }
        }
    }

    if (data.products.length === 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            products: data.products,
        },
        revalidate: 10,
        redirect: "/"
    }
}

export default Home