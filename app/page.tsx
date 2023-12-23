import Link from "next/link";
import ProductCard from "./components/ProductCard";
import UsersPage from "./users/page";

export default function Home() {
  return (
    <main>
      <Link href='/users'>Users</Link>
      <ProductCard />
      <UsersPage />
    </main>
  )
}
