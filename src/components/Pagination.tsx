import { Link } from "react-router-dom";

export function Pagination({
  totalPages,
  activePage,
}: {
  totalPages: number;
  activePage: number;
}) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div
      className="results__pagination"
      style={{ display: "flex", gap: "16px" }}
    >
      {pages.map((item) => {
        const isActive = item === activePage;
        return <Link to={isActive ? `./` : `?page=${item}`}>{item}</Link>;
      })}
    </div>
  );
}
