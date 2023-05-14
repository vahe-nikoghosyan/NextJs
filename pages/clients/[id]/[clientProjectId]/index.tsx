import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query); // {id: '1', clientProjectId: 'project1'}

  return (
    <div>
      <h1>Selected client project page</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
