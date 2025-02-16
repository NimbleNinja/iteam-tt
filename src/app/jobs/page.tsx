"use client";
import { JobCard } from "@/components/JobCard";
import Search from "@/components/Search";

const jobs = [
  {
    id: 1,
    title: "React Developer",
    company: "Awesome Company",
    description:
      "Потрібен розробник React для створення сучасних веб-додатків.",
    logo: "https://via.placeholder.com/64",
  },
  {
    id: 2,
    title: "Fullstack Developer",
    company: "Tech Solutions",
    description: "Розробка як клієнтської, так і серверної частин проектів.",
    logo: "https://via.placeholder.com/64",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    company: "Tech Solutions",
    description: "Розробка як клієнтської, так і серверної частин проектів.",
    logo: "https://via.placeholder.com/64",
  },
  {
    id: 4,
    title: "Fullstack Developer",
    company: "Tech Solutions",
    description: "Розробка як клієнтської, так і серверної частин проектів.",
    logo: "https://via.placeholder.com/64",
  },
  // Додайте інші вакансії
];

export default function Page() {
  return (
    <div className="flex-1 bg-base-200 text-neutral-content">
      <div className="container mx-auto p-4">
        <Search />
        <div className="grid grid-cols-1 gap-6">
          {jobs.length ? (
            jobs.map((job) => <JobCard key={job.id} job={job} />)
          ) : (
            <div className="col-span-full text-center">
              <p>Немає доступних вакансій.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
