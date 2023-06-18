'use client'

import { ChangeEvent, useEffect, useState } from 'react'

import { Post } from './prompt-card'
import { PromptCardList } from './prompt-card-list'

export function Feed() {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState<Post[]>([])

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/api/prompt')

      const data = await response.json()

      setPosts(data)
    }

    fetchPosts()
  }, [])

  return (
    <section className="feed">
      <form action="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username"
          onChange={(e) => handleSearchChange(e)}
          value={searchText}
          className="peer search_input"
        />
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={() => console.log('clicked')}
      />
    </section>
  )
}
