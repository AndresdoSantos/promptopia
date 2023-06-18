import { Post, PromptCard } from './prompt-card'

type Props = {
  data: Post[]
  handleTagClick(): void
}

export function PromptCardList({ data, handleTagClick }: Props) {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}
