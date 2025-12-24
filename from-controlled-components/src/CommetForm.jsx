export default function CommentFrom({handleInputChange,handleSubmit,formData}){
    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username : </label>
            <input type="text" id='username' placeholder='enter name' name='username'value={formData.username} onChange={handleInputChange}/><br /><hr />
            
            <label htmlFor="comment">Comment : </label>
            <textarea name="comment" id="comment" rows={5} cols={20} value={formData.comment} placeholder='add some comment' onChange={handleInputChange}></textarea><br /><hr />
            
            <label htmlFor="rating">Rating : </label>
            <input type="number" id='rating' name='rating' placeholder='enter rating'  min={1} max={5} value={formData.rating} onChange={handleInputChange}/><br /><hr />
            <button>Submit</button><br /><hr />
        </form>
    )
}