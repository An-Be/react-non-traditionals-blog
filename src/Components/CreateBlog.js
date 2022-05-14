function CreatePost() {
  return (
    <>
      <div className="container" id="intro">
        <div className="row">
          <div className="col-md">
            <h1>Create Blog</h1>
          </div>
        </div>
      </div>
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="title"
            class="form-control"
            placeholder="Title"
          />
          <label class="form-label" for="title"></label>
          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              id="blogText"
              name="blogText"
              rows="10"
              placeholder="Enter blog post here"
            ></textarea>
            <label class="form-label" for="blogText"></label>
          </div>
        </div>
        <div className="btn">
            <button type="submit" class="btn shadow btn-primary btn-lg btn-block mb-4">Post</button>
        </div>
      </form>
    </>
  );
}

export default CreatePost;
