import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { postAdded } from "../reducer/postsSlicer";
import { selectAllUsers } from "../reducer/usersSlice";

const AddFormPosts = () => {
    
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('')
    const [userId, setuserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = (e) => setTitle(e.target.value)
    const onContentChanged = (e) => setContent(e.target.value)
    const onAuthorChanged = (e) => setuserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
          dispatch(
            postAdded(title, content, userId)
          )
    
          setTitle('')
          setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <div>
        <h2>Add a New Post</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input
                type="text"
                id="postTitle"
                name="postTitle"
                value={title}
                onChange={onTitleChanged}
            />
            <label htmlFor="postContent">Content:</label>
            <textarea
                id="postContent"
                name="postContent"
                value={content}
                onChange={onContentChanged}
            />
            <label htmlFor="postAuthor">Author:</label>
            <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                <option value=""></option>
                {userOptions}
            </select>
            <button type="button" onClick={onSavePostClicked} disabled={!canSave}>Save Post</button>
        </form>
    </div>
  )
}

export default AddFormPosts