import Link from "next/link";

function Clients() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "manu", name: "Manual" },
  ];
  return (
    <div>
      <h1>Clients page</h1>

      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;
