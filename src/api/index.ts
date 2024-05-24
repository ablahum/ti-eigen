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
  const res = await fetch(`${import.meta.env.VITE_API_URL}?country=${country}&apiKey=${import.meta.env.VITE_API_KEY}`)

  if (!res.ok) throw new Error('Response was not ok')

  const data: NewsResponse = await res.json()
  return data
}
