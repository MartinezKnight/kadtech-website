import Link from "next/link";
import { CategoryDef } from "@/lib/constants";
import { isCategoryActive } from "@/lib/products";

export default function CategoryCard({ category }: { category: CategoryDef }) {
  // Looks for a white-background-removed cutout at
  // /public/categories/{slug}-cutout.jpg (PNG data, .jpg name — works fine,
  // browsers read the actual bytes not the extension). Falls back to the
  // plain (white-background) file if no cutout exists yet, and the whole
  // thing quietly does nothing if neither file exists — safe to leave
  // wired up before photos are supplied.
  const photoUrl = `/categories/${category.slug}-cutout.jpg`;
  const active = isCategoryActive(category.slug);

  const content = (
    <>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(124,156,255,0.14), transparent 65%), linear-gradient(180deg, #121B2E 0%, #0B1220 100%)",
        }}
      />
      <img
        src={photoUrl}
        alt=""
        className={`absolute inset-0 w-full h-full object-contain p-10 md:p-12 transition-transform duration-700 ease-out group-hover:scale-105 ${
          active ? "opacity-100" : "opacity-40 grayscale"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-midnight-900/95 via-midnight-900/10 to-transparent" />

      <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-display text-xl md:text-2xl text-offwhite tracking-tight transition-transform duration-500 group-hover:-translate-y-1">
            {category.label}
          </h3>
          {active ? (
            <span className="text-offwhite opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden md:inline">
              →
            </span>
          ) : (
            <span className="self-start text-[10px] font-body uppercase tracking-wide text-silver/70 border border-silver/30 px-2 py-1 whitespace-nowrap">
              Coming soon
            </span>
          )}
        </div>
        <p className="hidden md:block text-silver text-sm mt-2 font-body">{category.description}</p>
      </div>
    </>
  );

  if (!active) {
    return (
      <div
        className="group relative block aspect-[4/5] overflow-hidden bg-midnight cursor-default"
        aria-disabled="true"
      >
        {content}
      </div>
    );
  }

  return (
    <Link
      href={`/shop/${category.slug}`}
      className="group relative block aspect-[4/5] overflow-hidden bg-midnight"
    >
      {content}
    </Link>
  );
}
