
import { prismaClient } from "@repo/db/client";


export default async function Home() {
  const user = await prismaClient.users.findFirst();

  return (
    <div>
       UserName : "I just changed this line"
        Password:
      {user?.password}
      <br />
      <div>
        hi there
      </div>
    </div>
  );
}
