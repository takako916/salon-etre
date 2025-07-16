'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // パンくずリストの項目を定義
  const breadcrumbItems = [
    { path: "/", label: "Accueil" },
    { path: "/programme", label: "Programme" },
    { path: "/exposants", label: "Exposants" },
    { path: "/lieu", label: "Lieu & Accès" },
    { path: "/exposer", label: "Nous contacter" },
  ];

  // 現在のパスに基づいてパンくずリストを生成
  const generateBreadcrumbs = () => {
    const breadcrumbs = [{ path: "/", label: "Accueil" }];
    
    if (pathname === "/") {
      return breadcrumbs;
    }

    const currentItem = breadcrumbItems.find(item => item.path === pathname);
    if (currentItem) {
      breadcrumbs.push(currentItem);
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <nav className="bg-[#fcf7ea] py-2 px-4 border-b border-amber-200">
      <div className="max-w-5xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={breadcrumb.path} className="flex items-center">
              {index > 0 && (
                <svg 
                  className="w-4 h-4 mx-2 text-[#218393]" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-[#218393] font-medium">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link 
                  href={breadcrumb.path}
                  className="text-[#218393] hover:text-emerald-700 transition-colors"
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
} 