import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import "../../../../styles/globals.css";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const query = groq`*[_type=='post']
  {
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `;

  const post: Post = await client.fetch(query, { slug });

  return (
    <article className="px-10 pb-28 text-l sm:text-2xl 4k:text-2xl mx-auto max-w-4xl 4k:max-w-[2000px]">
      <section className="space-y-2 border border-purple-400 text-white rounded mb-4">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between bg-gradient-to-r from-purple-900 via-black to-pink-900 background-animate">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object-center mx-auto"
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className="p-5 w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{post.title}</h1>
                <p className="mt-2">
                  {new Date(post._createdAt).toLocaleDateString("en-SE", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full object-cover h-12 w-12 4k:h-14 4k:w-14"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={100}
                  height={100}
                />
                <div className="">
                  <h3 className="text-lg font-bold 4k:text-2xl">
                    {post.author.name}
                  </h3>
                  {/* TODO: Author bio */}
                </div>
              </div>
            </div>

            <div>
              <h2 className="italic p-10 text-lg 4k:text-xl">{post.description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className=" bg-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4 4k:text-xl"
                  >
                    #{category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <div className="md:text-xl 4k:text-2xl leading-relaxed break-words">
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
    </article>
  );
}

export default Post;
