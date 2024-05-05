import React,{useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/config'
import {Container,PostForm} from '../components'

function EditPost() {
    const [post, setPost] = useState(null)
    const navigate = useNavigate()
    const {slug} = useParams()

    useEffect(() => { 
        console.log(slug);
        if (slug) { 

            service.getPost(slug).then((post)=> {
                if (post) {
                    setPost(post)
                }
            })
        }
    }, [slug,navigate])
    
  return post?(
    <div className='py-8'>
        <Container>
            <PostForm post= {post}/>
        </Container>
    </div>
  ):null
}

export default EditPost