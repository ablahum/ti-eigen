import { useEffect, useState } from 'react'
import { getNews } from './api'
import Article from './components/Article'
import DetailArticle from './components/DetailArticle'

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

const App: React.FC = () => {
  const [data, setData] = useState<NewsArticle[]>([])
  const [detailArticle, setDetailArticle] = useState<NewsArticle>({})
  const [showArticle, setShowArticle] = useState<boolean>(false)

  const getData = async (): Promise<void> => {
    try {
      const res = await getNews('us')

      setData(res.articles)
    } catch (error) {
      console.error('Error fetching news data:', error)
    }
  }

  const handleClick = (index: number) => {
    setDetailArticle(data[index])
    setShowArticle(true)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='app'>
      {showArticle ? (
        <DetailArticle
          detailArticle={detailArticle}
          setShowArticle={setShowArticle}
        />
      ) : (
        data?.map((item, i) => [
          <Article
            key={i}
            description={item.description}
            title={item.title}
            image={item.urlToImage}
            index={i}
            handleClick={handleClick}
          />,
        ])
      )}
    </div>
  )
}

export default App
