import Image from "next/image"
import banner from '../static/banner.png'

const styles ={
stay:'max-w-xl text-[5rem] font-mediumSerif',
para:'text-2xl ',
accentedButton:'bg-black text-white rounded-full py-2 px-4',
content:'flex justify-between items-center flex-1 max-w-7xl',
wrapper:'h-max-[10rem] flex items-center justify-center bg-[#fcc017] border-y border-black',
image:'hidden h-32 md:inline-flex object-contain'
}

const Banner = ()=>{
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
        <div className='space-y-5 px-10 flex-[3]'>
        <h1 className={styles.stay}>Stay Curious.</h1>
        <h3 className={styles.para}>Discover stories, thinking, and expertise from writers on any topic.</h3>
        <button className={styles.accentedButton}>Start Reading</button>
        </div>
        <Image
         src={banner.src}
         width={500}
         height={400}
         />
            </div>
        </div>
    )
}
export default Banner