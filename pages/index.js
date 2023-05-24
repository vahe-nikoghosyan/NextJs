import fs from "fs/promises"
import path from "path"
import Link from "next/link";

function Home(props) {
    return (
        <div>
            <ul>
                {
                    props.products.map(p => {
                        return (
                            <li key={`/${p.id}`}>
                                <Link href={p.id}>
                                    {p.title}
                                </Link>
                            </li>
                        )
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
    }
}


export default Home