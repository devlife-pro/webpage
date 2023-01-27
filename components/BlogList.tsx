import urlFor from "../lib/urlFor";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  return (
    <div className="max-w-6xl mx-auto 4k:max-w-[2000px]">

      <div className="grid grid-cols-1 lg:grid-cols-3 px-10 gap-10 gap-y-16 pb-24 4k:grid-cols-4">
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 duration-200 transition-transform ease-out">
                <Image
                  className="object-cover object-left lg:object-center rounded"
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg drop-shadow-lg text-white p-6 flex justify-between rounded-b">
                  <div>
                    <p className="font-bold">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("sv-SE", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {post.categories.map((category) => (
                      <div className="bg-purple-400 text-center text-black py-1 px-3 rounded text-sm font-semibold" >
                        <p>#{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">{post.title}</p>
                <p className="line-clamp-2 text-white">{post.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4 text-center">
              <p className="mt-5 font-bold flex items-center group-hover:underline">
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </p>
              <div className="flex items-center space-x-2 justify-center">
                <Image
                  className="rounded-full object-cover h-10 w-10 4k:h-14 4k:w-14"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={100}
                  height={100}
                />
                <div className="">
                  <h3 className="text-lg font-bold 4k:text-2xl group-hover:underline bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                    {post.author.name}
                  </h3>
                  {/* TODO: Author bio */}
                </div>
              </div>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
