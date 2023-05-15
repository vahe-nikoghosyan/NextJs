import { useRouter } from "next/router";

function ClientProject() {
  const router = useRouter();
  console.log(router.query); // {id: '1'}

  function loadProjectHandler() {
    // load data...
    // router.push("/clients/max/project1");
    // router.replace("/clients/max/project1");
    router.push({
      pathname: "/clients/[id]/[clientProjectId]",
      query: { id: "max", clientProjectId: "project1" },
    });
  }

  return (
    <div>
      <h1>Client Project page</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
}

export default ClientProject;
