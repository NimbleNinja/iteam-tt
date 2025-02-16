import Link from "next/link";
import HeaderNavigation from "./HeaderNavigation";

export default function Header() {
  return (
    <header className="navbar sticky top-0 z-50 bg-base-200 shadow-md gap-2">
      <div className="navbar-start pl-3">
        <Link href="/" className="normal-case text-xl">
          ITeam Jobs
        </Link>
      </div>

      <div className="navbar-end">
        <HeaderNavigation />
      </div>

      <div className="flex-none">
        <div className="avatar placeholder">
          <div className="bg-neutral text-neutral-content w-10 rounded-full">
            <span className="text-xl">AV</span>
          </div>
        </div>
      </div>
    </header>
  );
}
