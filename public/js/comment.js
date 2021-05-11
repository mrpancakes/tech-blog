const postComment = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    const postId = document.querySelector('#post').value.trim();

    if(comment.length > 0){
        const response = await fetch(`/api/articles/${postId}/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment} ),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok){
            document.replace(`/article/${postId}`);
        } else {
            alert(response.statusText);
        };

        console.log(comment, postId)
    };
};

document
.querySelector('.post-comment')
.addEventListener('submit', postComment);