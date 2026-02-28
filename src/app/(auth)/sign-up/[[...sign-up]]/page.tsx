import { SignUp } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Page() {
  const { userId } = await auth();
  return <div className="flex items-center justify-center h-screen">
    <SignUp fallbackRedirectUrl={`/dashboard`} />
  </div>;
}