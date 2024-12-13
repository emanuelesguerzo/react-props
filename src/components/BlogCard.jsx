import PrimaryButton from "./PrimaryButton";
import style from "./BlogCard.module.css";

const BlogCard = ({title, image, content, tags}) => {
    return (
        <div className={style.card}>
            <div>
                <img className={style.image} src={image} alt="600 x 400" />
            </div>
            <div className={style.content}>
                <h5 className={style.title}>{title}</h5>
                <div className="tag">
                    {tags.map((curTag, index) => (
                        <span key={index} className={`tag tag-${curTag}`}>
                            {curTag}
                        </span>
                    ))}
                </div>
                <p className={style.description}>{content}</p>
                <PrimaryButton />
            </div>
        </div>
    )
}

export default BlogCard;