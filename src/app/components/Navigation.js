import Link from "next/link";

export default function Navigation() {
  return (
    <ul className="flex flex-col">
      <Link href="/">Home</Link>
      <Link href="/cabins">Cabins</Link>
      <Link href="/account">Your Account</Link>
      <Link href="/about">About us</Link>
    </ul>
  );
}
