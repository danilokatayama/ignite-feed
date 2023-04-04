import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/danilokatayama.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Danilo Katayama</strong>
              <time title='02 April 2023 20:00:00' dateTime='2023-03-02 20:00:00'>About 1 day ago</time>
            </div>

            <button title='Delete comment'>
              <Trash size={24} />
            </button>
          </header>

          <p>Well done! 👏👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Cheer <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}