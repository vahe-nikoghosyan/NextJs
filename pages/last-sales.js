import {useEffect, useState} from "react";
import useSWR from "swr";

function LastSalesPage() {
    const [sales, setSales] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);

    const { data, error } = useSWR("https://nextjs-curse-eb698-default-rtdb.firebaseio.com/sales.json");
    console.log("error", error)
    console.log("Data", data)

    useEffect(() => {
        if (data) {
            const transformedData = []
            for (const key in data) {
                transformedData.push({ id: key, username: data[key].username, volume: data[key].volume })
            }
            setSales(transformedData)
        }
    }, [data])

    // useEffect(() => {
    //     setIsLoading(true)
    //     fetch("https://nextjs-curse-eb698-default-rtdb.firebaseio.com/sales.json").then(response => {
    //         return response.json()
    //     }).then(data => {
    //         console.log("Data", data)
    //         const transformedData = []
    //
    //         for (const key in data) {
    //             transformedData.push({ id: key, username: data[key].username, volume: data[key].volume })
    //         }
    //         setSales(transformedData)
    //         setIsLoading(false)
    //     }).catch(err => {
    //         console.log("err", err);
    //         setIsLoading(false);
    //     });
    // }, []);


    if (error) {
        return <p>Failed to load!</p>
    }

    if (!data || !sales) {
        return <p>Loading ...</p>
    }

    return (
        <ul>
            {sales.map(sale => {
                return (
                    <li key={sale.id}>
                        {sale.username} - ${sale.volume}
                    </li>
                )
            })}
        </ul>
    );
}

export default LastSalesPage