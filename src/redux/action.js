// remove
export function removePost(index) {
    return {
      type:'REMOVE_POST',
      index: index
    }
}

export function addPost(post) {
  return {
    type: 'ADD_POST',
    post
  }
}

// adding a posts
