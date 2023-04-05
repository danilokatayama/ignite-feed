import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import './global.css';

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https:github.com/danilokatayama.png',
      name: 'Danilo Katayama',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'As a web developer, you understand the power of technology and how it can shape the way we interact with the world. Your passion for creating stunning websites and user-friendly interfaces is evident in every line of code you write.' },
      { type: 'paragraph', content: 'In your personal blog, you share your journey as a web developer with your audience. From the latest web development trends to tips and tricks that can help aspiring developers succeed, your blog is a wealth of information for anyone interested in the field.' },
      { type: 'paragraph', content: 'Through your writing, you inspire others to follow in your footsteps and pursue their dreams of becoming web developers. You encourage your readers to never give up on their goals and to always strive for excellence in everything they do.' },
      { type: 'paragraph', content: 'As you continue to grow and evolve as a web developer, your blog will remain a valuable resource for those looking to learn from your experiences and expertise. Your passion and dedication to your craft will undoubtedly continue to shine through in all of your future endeavors, and your readers will be eagerly following along every step of the way.' },
      { type: 'link', content: 'danilo.katayama/design' }
    ],
    publishedAt: new Date('2023-04-02 21:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https:github.com/danilokatayama.png',
      name: 'Danilo Katayama',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'As a talented web developer, you bring a unique blend of technical expertise and creative flair to your work. Through your personal blog, you inspire others to explore the exciting world of web development and share your insights and experiences with the community. ' },
      { type: 'paragraph', content: 'Keep up the great work!' },
      { type: 'link', content: 'danilo.katayama/design' }
    ],
    publishedAt: new Date('2023-04-03 18:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
