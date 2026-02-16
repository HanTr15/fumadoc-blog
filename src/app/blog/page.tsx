import Link from "next/link";
import { blogSource } from "@/lib/source";

export default async function BlogPage() {
    const posts = blogSource.getPages();

    return (
        <div className="mx-auto max-w-7xl px-6 py-20">

            {/* HEADER */}
            <div className="text-center mb-24">
                <h1 className="text-4xl font-semibold tracking-wide">
                    | Blog |
                </h1>
                <p className="text-muted-foreground mt-4">
                    Tulisan dan eksperimen seputar cyber security.
                </p>
            </div>

            {/* GRID WRAPPER */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

                {posts.map((post, index) => (
                    <div key={post.url} className="group relative">

                        {/* CARD OVERLAY */}
                        <div
                            className="
      relative
      -mt-20
      mx-8
      bg-background
      border
      shadow-lg
      p-8
      z-10
    "
                        >
                            {/* NUMBER */}
                            <p className="text-xs text-muted-foreground mb-3">
                                {(index + 1).toString().padStart(3, "0")}
                            </p>

                            {/* TITLE */}
                            <h3 className="text-lg font-semibold mb-4">
                                {post.data.title}
                            </h3>

                            {/* DESC */}
                            <p className="text-sm text-muted-foreground mb-6">
                                {post.data.description}
                            </p>

                            {/* BUTTON */}
                            <Link
                                href={`/blog/${post.slugs[0]}`}
                                className="
        inline-block
        border
        px-4 py-2
        text-xs
        hover:bg-foreground hover:text-background
        transition
      "
                            >
                                Read
                            </Link>
                        </div>

                    </div>

                ))}

            </div>

        </div>
    );
}
