import PrimaryButton from "./PrimaryButton";
import style from "./BlogCard.module.css"

const BlogCard = () => {
    return (
        <div className={style.card}>
            <div>
                <img className={style.image} src="https://via.placeholder.com/600x400" alt="600 x 400" />
            </div>
            <div className={style.content}>
                <h5 className={style.title}>Titolo del Post</h5>
                <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A cumque rem exercitationem nisi dolorum ratione veritatis, aspernatur quis! Eum architecto voluptate rerum suscipit corrupti reprehenderit saepe repellat fuga ut tempora?</p>
                <PrimaryButton />
            </div>
        </div>
    )
}

export default BlogCard;