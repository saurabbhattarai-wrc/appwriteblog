import React, { useEffect, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import service from '../appwrite/config'
import { Button, Input, Select, RTE } from './index'
import { useSelector } from 'react-redux'

function PostForm({ post }) {
    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    const { register, handleSubmit, watch, setValue, getValues, control } = useForm({
        defaultValues: {
            title: post?.title || '',
            content: post?.content || '',
            slug: post?.slug || '',
            status: post?.status || 'active',
        }
    })

    const submit = async (data) => {
        if (post) {
            try {

                const file = data.image[0] ? service.uploadFile(data.image[0]) : null

                let awaitedFile = await file

                if (awaitedFile) {
                    service.deleteFile(post.featuredImage)
                }

                const dbpost = await service.editPost(post.$id, {
                    ...data,
                    featuredImage: awaitedFile ? awaitedFile.$id : undefined
                })
                if (dbpost) {
                    navigate(`/post/${dbpost.$id}`)
                }


            } catch (error) {
                throw error
            }
        } else {
            try {
                const file = await service.uploadFile(data.image[0])
                if (file) {
                    const fileId = file.$id
                    data.featuredImage = fileId
                    const dbpost = await service.createPost({ ...data, userId: userData.$id })

                    if (dbpost) {
                        navigate(`/post/${dbpost.$id}`)
                    }
                }
            } catch (error) {
                console.log(error);
            }

        }
    }


    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") {
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-')
        }
        return ''
    }, [])


    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), {
                    shouldValidate: true
                })
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [slugTransform, setValue, watch])



    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
            <div className="w-2/3 px-2">
                <Input
                    label="Title :"
                    placeholder="Title"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    readOnly
                    label="Slug :"
                    placeholder="Slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue(("slug", slugTransform(e.currentTarget.value), { shouldValidate: true }));
                    }}
                />
                <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
            </div>
            <div className="w-1/3 px-2">
                <Input
                    label="Featured Image :"
                    type="file"
                    className="mb-4"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full mb-4">
                        <img
                            src={service.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <Select
                    options={["active", "inactive"]}
                    label="Status"
                    className="mb-4"
                    {...register("status", { required: true })}
                />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full" text={post ? 'Edit' : 'Post'} />
            </div>
        </form>
    )
}

export default PostForm
