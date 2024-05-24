interface NewsResponse {
  status: string
  totalResults: number
  articles: NewsArticle[]
}

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

export const getNews = async (country: string): Promise<NewsResponse> => {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=a724c0ddb9284f4daac43bbffc07770d`)

  if (!res.ok) throw new Error('Response was not ok')

  const data: NewsResponse = await res.json()
  return data
}
