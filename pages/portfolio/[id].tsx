import { useRouter } from "next/router";

function PortfolioProject() {
  const router = useRouter();

  console.log(router.pathname); // portfolio/[id]
  console.log(router.query); // { id: "1" }

  // send request to some backend server
  return (
    <div>
      <h1>The portfolio project page</h1>
    </div>
  );
}
export default PortfolioProject;
