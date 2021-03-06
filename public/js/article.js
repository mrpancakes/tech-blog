const updateBtn = document.querySelector('#updateBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const articleId = document.querySelector('#specific-article').value;

const postComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    const postId = document.querySelector('#post').value.trim();

    if (comment.length > 0) {
        const response = await fetch(`/api/articles/${postId}/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace(`/article/${postId}`);
        } else {
            alert(response.statusText);
        };

        console.log(comment, postId)
    };
};

const editArticle = async (event) => {
    event.preventDefault();
    console.log('button clicked')


    const title = document.querySelector('#article-title').value.trim();
    const content = document.querySelector('#article-content').textContent.trim();
    

    console.log(title);
    console.log(content);
    console.log(articleId);

    if (title.length > 0 && content.length > 0) {
        const response = await fetch(`/api/articles/${articleId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, content, articleId }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace(`/article/${articleId}`);
        } else {
            alert(response.statusText);
        };

        console.log(title);
        console.log(content);
        console.log(articleId);
    }
};

const deleteArticle = async (event) => {
    event.preventDefault();

    const response = await fetch(`/api/articles/${articleId}`, {
        method: 'DELETE',
        body: JSON.stringify({ articleId }),
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        document.location.replace(`/`);
    } else {
        alert(response.statusText);
    };

}



document
    .querySelector('.post-comment')
    .addEventListener('submit', postComment);

updateBtn.addEventListener('click', editArticle);

deleteBtn.addEventListener('click', deleteArticle);

