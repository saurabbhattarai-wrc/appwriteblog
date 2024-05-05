import React, { useState,useEffect } from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/config'

function AllPost() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts([]).then((value) => {
            if (posts) {
                setPosts(value.documents)
            }
        })
    }, [])
    return (
        <div className='py-8'>
            <Container>
                <div className='flex flex-wrap gap-4'>
                    {posts.map((post) => (
                        <div key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPost
