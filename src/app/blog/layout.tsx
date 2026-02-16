import { DocsLayout } from 'fumadocs-ui/layouts/flux';
import { baseOptions } from '@/lib/layout.shared';
import { blogSource } from '@/lib/source';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout {...baseOptions()} tree={blogSource.getPageTree()}>
      {children}
    </DocsLayout>
  );
}