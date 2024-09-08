import type { BookData } from "@/types";
import Link from "next/link";

export default function BookItem({
  id,
  title,
  subTitle,
  author,
  publisher,
  coverImgUrl,
}: BookData) {
  return (
    <Link href={`/book/${id}`}>
      <img src={coverImgUrl} />
      <div>
        <div>{title}</div>
        <div>{subTitle}</div>
        <br />
        <div>
          {author} | {publisher}
        </div>
      </div>
    </Link>
  );
}
