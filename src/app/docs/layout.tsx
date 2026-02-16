import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { docsSource } from '@/lib/source';
import type { ReactNode } from 'react';
import { Home, Newspaper, User } from "lucide-react";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={docsSource.getPageTree()}
      sidebar={{
        className: "w-68",
        tabs: [
          {
            title: "Home",
            url: "/",
            icon: <Home className="w-4 h-4 shrink-0" />,
          },
          {
            title: "Writeup",
            url: "/docs",
            icon: <Newspaper className="w-4 h-4 shrink-0" />,
          },
          {
            title: "Blog",
            url: "/blog",
            icon: <Newspaper className="w-4 h-4 shrink-0" />,
          },
          {
            title: "About",
            url: "/#about",
            icon: <User className="w-4 h-4 shrink-0" />,
          }

        ],
      }}

    >

      {children}
    </DocsLayout>

  );
}
