"use client"

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const updateSorting = (sortOrder) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sortOrder); // 更新排序参数
    window.history.pushState(null, "", `/about?${params.toString()}`);
  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
      <Link scroll={false} href='/about?id=123'>去关于页面</Link>
      <br />
      <button type="button" onClick={() => router.push('/about')}>go about</button>
      <br />
      <h2 onClick={() => updateSorting('abc')}>去关于</h2>
    </div>
  );
}

export default Home;