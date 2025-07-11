import Link from "next/link";

export default function LinkResult({ hit, setSearchModalOpen }: any) {
  return (
    <div className="w-full group">
      <Link
        href={hit?.objectID || hit?.url}
        onClick={() => setSearchModalOpen(false)}
        className="block rounded-xl p-3 text-base font-medium text-black duration-300 group-hover:bg-[#E8EAEF] group-hover:text-primary sm:text-lg"
      >
      </Link>
    </div>
  );
}
