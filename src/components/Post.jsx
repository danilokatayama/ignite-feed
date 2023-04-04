import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/danilokatayama.png" />
          <div className={styles.authorInfo}>
            <strong>Danilo Katayama</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='02 April 2023 20:00:00' dateTime='2023-03-02 20:00:00'>Publlished 1 day ago</time>
      </header>

      <div className={styles.content}>
        <p>As a web developer, you understand the power of technology and how it can shape the way we interact with the world. Your passion for creating stunning websites and user-friendly interfaces is evident in every line of code you write.</p>
        <p>In your personal blog, you share your journey as a web developer with your audience. From the latest web development trends to tips and tricks that can help aspiring developers succeed, your blog is a wealth of information for anyone interested in the field.</p>
        <p>Through your writing, you inspire others to follow in your footsteps and pursue their dreams of becoming web developers. You encourage your readers to never give up on their goals and to always strive for excellence in everything they do.</p>
        <p>As you continue to grow and evolve as a web developer, your blog will remain a valuable resource for those looking to learn from your experiences and expertise. Your passion and dedication to your craft will undoubtedly continue to shine through in all of your future endeavors, and your readers will be eagerly following along every step of the way.</p>
        <p>
          <a href="">danilo.katayama/design</a>
        </p>
        <p>
          <a href="">#newproject</a>{' '}
          <a>#webdesign</a>
        </p>
      </div>

      <form className={styles.formComment}>
        <strong>Give your feedback</strong>

        <textarea 
          placeholder='Leave your comment'
        />

        <footer>
          <button type='submit'>Comment</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}