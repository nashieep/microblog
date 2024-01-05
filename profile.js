const apiUrl = 'http://microbloglite.us-east-2.elasticbeanstalk.com/api/posts'; 

const postData = {
  post: {
    _id: 'string',
    text: 'Hello, this is a sample post!',
    username: 'john_doe',
    createdAt: '2024-01-04T14:33:48.833Z',
    likes: [
      {
        _id: 'string',
        username: 'jane_doe',
        postId: 'string',
        createdAt: '2024-01-04T14:33:48.833Z'
      }
    ]
  },
  statusCode: 399
};

// Make a POST request
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(postData),
})
  .then(response => {
    if (!response.ok) {
      throw new Error(HTTP error! Status: ${response.status});
    }
    return response.json();
  })
  .then(data => {
    console.log('Post created successfully:', data);
  })
  .catch(error => {
    console.error('Error creating post:', error);
  });