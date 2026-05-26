import { useRouteError } from "react-router-dom";
export function ErrorPage() {
  interface Error {
    statusText?: string;
    message?: string;
  }
  const error = useRouteError() as Error;
  return (
    <>
      <h1>Error</h1>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </>
  );
}
