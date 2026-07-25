import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070708] text-[#F4F1EA] flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-sm uppercase tracking-[0.3em] opacity-60 mb-4">404</p>
        <h1 className="text-4xl sm:text-5xl font-normal mb-4">Page not found</h1>
        <p className="text-base opacity-70 mb-8">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-[#F4F1EA]/20 px-5 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-[#F4F1EA] hover:text-[#070708]"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
