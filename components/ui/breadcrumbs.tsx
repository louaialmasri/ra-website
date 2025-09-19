import Link from "next/link";

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: Breadcrumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm text-slate-500">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            <Link href={item.href} className="hover:text-sky-600 hover:underline">
              {item.label}
            </Link>
            {index < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}