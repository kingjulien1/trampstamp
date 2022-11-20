import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-row md:grid-flow-col gap-4">
        <Link className="link link-hover" href="/about" children="About" />
        <Link className="link link-hover" href="/privacy-policy" children="Privacy Policy" />
        <Link className="link link-hover" href="/terms-of-service" children="Terms & Conditions" />
        <a className="link link-hover" href="https://github.com/kingjulien1/trampstamp" children="Repository" />
      </div>
      <div>
        <a className="text-xs" href="https://github.com/kingjulien1">
          Made with ❤️ by kingjulien1.
        </a>
      </div>
    </footer>
  );
}
