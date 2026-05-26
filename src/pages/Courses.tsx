import { useLoaderData, useParams } from "react-router-dom";
import { SearchItems, type SearchItem } from "../data/searchItems";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader(): Promise<{ items: SearchItem[] }> {
  const items = SearchItems;
  return { items };
}
export function Courses() {
  const { link } = useParams<{ link: string }>();
  const { items } = useLoaderData() as { items: SearchItem[] };
  const currentCourse = items.find(
    (item: SearchItem) => item.link === `/${link}`,
  );
  if (!currentCourse) {
    return (
      <div style={{ padding: "20px" }}>
        <h3>Курс не найден</h3>
        <p>К сожалению, запрашиваемый модуль еще находится в разработке.</p>
      </div>
    );
  }
  return (
    <>
      <h3>{currentCourse.name}</h3>
      <div>{currentCourse.description}</div>
    </>
  );
}
