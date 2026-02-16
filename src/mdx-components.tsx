import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,

    img: (props: any) => (
      <img
        {...props}
        className="rounded-xl border"
      />
    ),


    ...components,
  };
}
