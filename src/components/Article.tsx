import { Card } from 'antd'

const { Meta } = Card

interface IArticleProps {
  title: string
  image: string | null
  description: string | null
  index: number
  handleClick: (index: number) => void
}

const Article: React.FC<IArticleProps> = ({ index, handleClick, title, description, image }) => (
  <Card
    hoverable
    cover={
      <img
        alt='article image'
        src={image || ''}
      />
    }
    onClick={() => handleClick(index)}
  >
    <Meta
      title={title}
      description={description}
    />
  </Card>
)

export default Article
