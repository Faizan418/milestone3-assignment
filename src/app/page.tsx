import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const fetchBlog = `*[_type == 'blog']{
    _id,
    title,
    heading,
    description,
    image,
  }`;

  let blogData = [];
  try {
    blogData = await client.fetch(fetchBlog);
  } catch (error) {
    console.error("Failed to fetch blog data:", error);
  }

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold p-6">Blogging Website</h1>

      {blogData.length > 0 ? (
        blogData.map((post) => (
          <div key={post._id} className="border p-5 hover:shadow-lg transition-shadow duration-300">
            <img
              src={post.image ? urlFor(post.image).url() : "/placeholder.jpg"}
              alt={post.title || "Blog image"}
              height={200}
              width={200}
            />
            <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
            <h3 className="text-xl font-semibold mb-2">{post.heading}</h3>
            <p>{post.description}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No blog posts available.</p>
      )}
    </div>
  );
}
