import { Button } from 'antd'
import { LeftOutlined } from '@ant-design/icons'

interface NewsArticle {
  source: {
    id: string | null
    name: string
  }
  author: string | null
  title: string
  description: string | null
  url: string
  urlToImage: string | null
  publishedAt: string
  content: string | null
}

interface IArticleProps {
  detailArticle: NewsArticle
  setShowArticle: (boolean: boolean) => void
}

const DetailArticle: React.FC<IArticleProps> = ({ detailArticle, setShowArticle }) => (
  <div className='detail-article'>
    <Button
      onClick={() => setShowArticle(false)}
      icon={<LeftOutlined />}
      type='link'
      style={{
        fontSize: '1rem',
        fontWeight: 700,
        marginBottom: '1rem',
      }}
    >
      Back to Home
    </Button>

    <div className='detail-article-card'>
      <img
        src={detailArticle.urlToImage || ''}
        alt='article image'
      />

      <p>{detailArticle.author}</p>

      <h1>{detailArticle.title}</h1>

      <p>{detailArticle.description}</p>

      <a
        href={detailArticle.url}
        target='_blank'
      >
        More about the News
      </a>
    </div>
  </div>
)

export default DetailArticle
