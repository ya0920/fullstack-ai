import { notFound } from "next/navigation"

export default function Home() {
  notFound()
  return (
    <div className="home">hello</div>
  );
}
