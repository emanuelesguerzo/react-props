import BlogCard from "./BlogCard";
import posts from "../data/data"

const AppMain = () => {
    const uniqueTags = [];
    posts.forEach((curPost) => {
      curPost.tags.forEach((curTag) => {
        if (!uniqueTags.includes(curTag)) {
          uniqueTags.push(curTag);
        }
      });
    });
  
    return (
        <main>
            <div className="container">
                <div className="row">
                    {posts.map((curPost) => {
                    const isPublic = curPost.published;
                    return (
                        <div className="col" key={curPost.id}>
                            {isPublic && (
                                <BlogCard
                                title={curPost.title}
                                image={curPost.image || "https://via.placeholder.com/600x400"}
                                content={curPost.content}
                                tags={curPost.tags}
                                />
                            )}
                        </div>
                        );
                    })}
                </div>

                <div className="unique-tags">
                    <h3>Tags</h3>
                    <div className="tags-list">
                        {uniqueTags.map((curTag, index) => (
                            <span key={index} className={`tag tag-${curTag}`}>
                            {curTag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
  };
  
export default AppMain;