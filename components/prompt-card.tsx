'use client'

import Image from 'next/image'
import { useCallback, useState } from 'react'

export type Post = {
  _id: string
  prompt: string
  tag: string

  creator: {
    _id: string
    email: string
    username: string
    image: string
  }
}

type Props = {
  post: Post
  handleTagClick(tag: string): void
  handleEdit(): void
  handleDelete(): void
}

export function PromptCard({ handleTagClick, post }: Props) {
  const [copied, setCopied] = useState('')

  const handleCopy = useCallback(() => {
    setCopied(post.prompt)

    navigator.clipboard.writeText(post.prompt)

    setTimeout(() => setCopied(''), 3000)
  }, [post.prompt])

  return (
    <div className="prompt_card">
      <div className="flex items-start justify-between gap-5">
        <div className="flex-1 flex items-center justify-start gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt=""
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-semibold text-gray-900 font-satoshi">
              {post.creator.username}
            </h3>
            <p className="font-inter text-gray-500 text-sm">
              {post.creator.email}
            </p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? 'assets/icons/ticky.svg'
                : 'assets/icons/copy.svg'
            }
            alt=""
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-semibold text-sm text-gray-700">{post.prompt}</p>
      <p
        className="text-sm blue_gradient font-inter cursor-pointer"
        onClick={() => handleTagClick(post.tag)}
      >
        {post.tag}
      </p>
    </div>
  )
}
