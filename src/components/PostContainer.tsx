import React, { FC, useState } from 'react';
import { postApi } from '../services/PostService';
import PostItem from './PostItem';
import { IPost } from '../models/IPost';

const PostContainer: FC = () => {
    const [limit, setLimit] = useState(20)
    const {data: posts, error, isLoading} = postApi.useFetchAllPostsQuery(limit)
    const [createPost, {}] = postApi.useCreatePostMutation()
    const [deletePost, {}] = postApi.useDeletePostMutation()
    const [updatePost, {}] = postApi.useUpdatePostMutation()

    const handleCreate = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = async (post: IPost) => {
        await deletePost(post)
    }

    const handleUpdate = async (post: IPost) => {
        await updatePost(post)
    }

    return (
        <div className='post__list'>
            <button
                onClick={handleCreate}
                style={{'marginTop': '20px'}}
            >
                Add new post
            </button>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>An error occured</h1>}
            {posts?.map(post => 
                <PostItem remove={handleRemove} update={handleUpdate} post={post} key={post.id} />    
            )}
        </div>
    );
};

export default PostContainer;