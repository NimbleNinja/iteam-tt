"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Formik } from "formik";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  return (
    <Formik
      initialValues={{
        title: searchParams?.get("query")?.toString() || "",
      }}
      onSubmit={(values) => {
        const params = new URLSearchParams(searchParams || "");
        if (values.title) {
          params.set("title", values.title);
        } else {
          params.delete("title");
        }

        replace(`${pathname}?${params.toString()}`);
      }}
    >
      {({ values, handleSubmit, handleChange }) => (
        <form
          onSubmit={handleSubmit}
          className="mb-8 flex flex-col md:flex-row gap-4"
        >
          <input
            type="text"
            name="title"
            placeholder="Search by title..."
            value={values.title}
            onChange={handleChange}
            className="input input-bordered flex-1"
          />
          <button type="submit" className="btn btn-accent">
            Search
          </button>
        </form>
      )}
    </Formik>
  );
}
