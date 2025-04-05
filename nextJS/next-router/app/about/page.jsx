"use client"

import { usePathname } from "next/navigation";

function About() {
  const pathname = usePathname();
  console.log(pathname);
  
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
export default About;