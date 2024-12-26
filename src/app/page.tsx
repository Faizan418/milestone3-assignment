import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const fetchBlog = `*[_type == 'blog']{
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
  console.log(blogData); 

  return (
    <div className="border">
      <h1 className="text-center text-4xl font-semibold p-6 mb-10">Blogging Website</h1>

      <div className="main_div">
      {blogData.length > 0 ? (
        blogData.map((post:any) => (
          <div key={post._id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 w-96 box">
            <img
              src={post.image ? urlFor(post.image).url() : "/placeholder.jpg"}
              alt={post.title || "Blog image"}
              height={300}
              width={400}
              className="border rounded-lg imag"
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
    </div>
  );
}
