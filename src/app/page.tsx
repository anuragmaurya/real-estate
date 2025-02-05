import { redirect } from "next/navigation";

export default function Home() {
  const shouldredirect = true
  if (shouldredirect) {
    redirect('/home');
  }
  return (
    <div></div>
  );
}
