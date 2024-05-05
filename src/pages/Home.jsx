import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import service from '../appwrite/config';

function Home() {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        service.getPosts().then((post) => {
            if (post) {
                setPosts(post.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center bg-gray-100">
                <Container>
                    <div className="flex flex-wrap justify-center">
                        <div className="p-4">
                            <h1 className="text-3xl font-bold text-gray-800 hover:text-gray-600">
                                Welcome!
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8 bg-gray-100">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <div key={post.$id} className="p-4">
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
