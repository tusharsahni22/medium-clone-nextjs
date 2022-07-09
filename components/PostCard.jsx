
import Image from 'next/image'
import Logo from '../static/logo.png'
import { FiBookmark } from 'react-icons/fi'

const styles = {
    authorContainer: `flex  gap-[0.4rem]`,
    authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem] `,
    authorImage: `object-cover`,
    authorName: `font-semibold`,
    title: `font-bold text-2xl`,
    briefing: `text-[#787878]`,
    detailsContainer: `flex items-center justify-between text-[#787878]`,
    articleDetails: `my-2 text-[0.8rem]`,
    category: `bg-[#f2f3f2] rounded-full px-2 py-1`,
    postDetails: `flex-[2.5rem] flex flex-col`,
    bookmark: `h-5 w-5`,
    bookmarkContainer: `cursor-pointer`,
    thumbnailContainer:``,
    wrapper:`flex max-w-[46rem] h-[10rem items-center gap-[1rem] cursor-pointer`
}

const PostCard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.postDetails}>
                <div className={styles.authorContainer}>
                    <div className={styles.authorImageContainer}>
                        <Image src={Logo}
                            className={styles.authorImage}
                            height={40}
                            width={40}
                        />


                    </div>
                    <div className={styles.authorName}>Kapil Kaushik</div>
                </div>

                <h1 className={styles.title}>Why the Right is Winning (and What the Left Must Learn)</h1>

                <div className={styles.briefing}>Yes, they have structural advantages, but they’re also better at politics than we are</div>
                <div className={styles.detailsContainer} >
                    <span className={styles.articleDetails}>Jun 15 · 10 min read · <span className={styles.category}>Wellness</span> </span>
                    <span className={styles.bookmarkContainer}>
                        <FiBookmark className={styles.bookmark} />
                    </span>
                </div>
            </div>
            <div className={styles.thumbnailContainer}>
            <Image
            src={Logo}
            height={100}
            width={100} />
            </div>
        </div>
    )
}

export default PostCard