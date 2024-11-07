// если я хочу вернуть объект, оборачиваю фигурные скобки круглыми ({object})

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt
})

const firstPost = {
    id: 1,
    author: 'Sasha'
}

console.log(newPost(firstPost))