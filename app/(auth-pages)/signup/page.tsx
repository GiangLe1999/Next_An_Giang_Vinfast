import RegisterForm from "@/components/auth-pages/register-form";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/utils/authOptions";
import { linkConstants } from "@/data/constants";

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect(linkConstants.dashboard);
  }
  return <RegisterForm />;
}
