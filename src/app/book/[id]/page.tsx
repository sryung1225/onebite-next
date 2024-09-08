import books from "@/mock/books.json";

export default function Page({
  params,
}: {
  params: { id: string | string[] };
}) {
  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    books[0];

  return (
    <div>
      <div>
        <img src={coverImgUrl} />
      </div>
      <div>{title}</div>
      <div>{subTitle}</div>
      <div>
        {author} | {publisher}
      </div>
      <div>{description}</div>
    </div>
  );
}
