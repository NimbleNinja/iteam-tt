import Link from "next/link";

export default function Page() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-primary">
            Find Your Dream Job
          </h1>
          <p className="py-6 text-neutral-content">
            Discover thousands of job opportunities that match your skills and
            ambitions. Join a community of professionals who have already taken
            the first step towards new possibilities.
          </p>
          <Link href="/jobs">
            <button className="btn btn-accent">Search</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
