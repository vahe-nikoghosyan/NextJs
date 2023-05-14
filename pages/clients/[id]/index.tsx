import { useRouter } from "next/router";

function ClientProject() {
  const router = useRouter();
  console.log(router.query); // {id: '1'}

  return (
    <div>
      <h1>Client Project page</h1>
    </div>
  );
}

export default ClientProject;
