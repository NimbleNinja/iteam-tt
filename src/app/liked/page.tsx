const likedJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Corp",
    location: "Remote",
    salary: "$60,000 - $80,000",
  },
  {
    id: 2,
    title: "React Native Engineer",
    company: "Mobile Solutions",
    location: "New York, USA",
    salary: "$70,000 - $90,000",
  },
  {
    id: 3,
    title: "Senior UI/UX Designer",
    company: "Design Studio",
    location: "London, UK",
    salary: "$80,000 - $100,000",
  },
];

export default function Page() {
  return (
    <div className="flex-1 bg-base-200 p-6">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">
        Liked Jobs
      </h1>

      {likedJobs.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {likedJobs.map((job) => (
            <div key={job.id} className="card bg-base-100 shadow-lg p-4">
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-neutral-content">{job.company}</p>
              <p className="text-sm">{job.location}</p>
              <p className="text-success font-medium">{job.salary}</p>
              <button className="btn btn-error mt-4">Remove</button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-neutral-content text-lg">
          No liked jobs yet.
        </p>
      )}
    </div>
  );
}
