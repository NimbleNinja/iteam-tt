import Link from "next/link";

export default function Page() {
  // Приклад даних профілю (зазвичай їх отримують із бекенду або стану)
  const profile = {
    name: "John Doe",
    jobTitle: "Senior Frontend Developer",
    aboutMe:
      "Passionate about building scalable and user-friendly applications.",
  };

  return (
    <div className="flex-1 bg-base-200 flex items-center justify-center p-6">
      <div className="card w-full max-w-lg bg-base-100 shadow-lg p-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-4">
          Profile
        </h2>

        <div className="space-y-4">
          {/* Name */}
          <div>
            <h3 className="text-lg font-semibold">Name</h3>
            <p className="text-neutral-content">{profile.name}</p>
          </div>

          {/* Desired Job Title */}
          <div>
            <h3 className="text-lg font-semibold">Desired Job Title</h3>
            <p className="text-neutral-content">{profile.jobTitle}</p>
          </div>

          {/* About Me */}
          <div>
            <h3 className="text-lg font-semibold">About Me</h3>
            <p className="text-neutral-content">{profile.aboutMe}</p>
          </div>

          {/* Edit Profile Button */}
          <Link href="/edit-profile">
            <button className="btn btn-primary w-full mt-4">Edit</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
