import Link from "next/link";

export const JobCard = ({ job }) => (
  <div className="card bg-base-100 shadow-xl">
    <figure className="px-4 pt-4">
      <img
        src={job.logo}
        alt={job.company}
        className="rounded-full w-16 h-16 object-cover"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-primary">{job.title}</h2>
      <p className="text-secondary">{job.company}</p>
      <p>{job.description}</p>
      <div className="card-actions justify-end mt-4">
        <Link href={`job-details/${123}`}>
          <button className="btn btn-primary">Details</button>
        </Link>
      </div>
    </div>
  </div>
);
