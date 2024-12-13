import BlogCard from "./BlogCard";
import posts from "../data/data"

const AppMain = () => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    {posts.map((curPost) => (
                        <div className="col" key={curPost.id}>
                            <BlogCard
                                title={curPost.title}
                                image={curPost.image || "https://via.placeholder.com/600x400"}
                                content={curPost.content}
                                tags={curPost.tags}
                            />
                        </div>
                    ))}                   
                </div>             
            </div>
        </main>
    )
}

export default AppMain;