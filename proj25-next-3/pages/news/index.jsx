import Link from "next/link";

export default function NewsPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/test-1">Test 1</Link>
        </li>
        <li>
          <Link href="/news/test-2">Test 2</Link>
        </li>
      </ul>
    </>
  );
}
