class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }

    upvote() {
        this.votesQty += 1
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}


const firstComment = new Comment('first comment')
const secondComment = new Comment('second comment')
const thirdComment = new Comment('third comment')
console.log(Comment.mergeComments('First comment.', 'Second comment.'))

console.log(firstComment)
console.log(secondComment)
console.log(thirdComment)