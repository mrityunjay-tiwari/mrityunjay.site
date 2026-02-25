import {auth} from "@/utils/auth";
import {redirect} from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    return redirect("/signin");
  }

  if (session?.user?.email !== process.env.ADMIN_EMAIL) {
    return redirect("/");
  }

  return <>{children}</>;
}
