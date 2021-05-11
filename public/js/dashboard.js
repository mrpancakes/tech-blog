const newArticleBtn = document.querySelector('#new-article-btn');
const newArticleDiv = document.querySelector('#new-article-div');
const abortBtn = document.querySelector('#abort-btn');
 
newArticleBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  newArticleDiv.setAttribute('class', 'row mt-4 mb-4');

  console.log('you clicked the button');

});

abortBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  newArticleDiv.setAttribute('class', 'hidden');

  console.log('you clicked the button');

});


const newArticleHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
  
    if (title && body) {
      const response = await fetch(`/api/articles`, {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create post');
      };

      console.log(title);
      console.log(body)

    }
  };

  

  document
  .querySelector('.new-article-form')
  .addEventListener('submit', newArticleHandler);