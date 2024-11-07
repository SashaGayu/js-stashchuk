const useProfile = {
    name: 'Sasha',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const userInfo = ({name, commentsQty}) => {
    if(!commentsQty) {
        return `User ${name} has no comments`
    }

    return `User ${name} has ${commentsQty} comments`
}

console.log(userInfo(useProfile))