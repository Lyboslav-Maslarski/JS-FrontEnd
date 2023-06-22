function userCommentsParser(input) {
    let users = [];
    let articles = [];

    for (const line of input) {
        if (line.includes('user')) {
            users.push(line.substring(line.indexOf(' ') + 1));
        } else if (line.includes('article')) {
            let articleName = line.substring(line.indexOf(' ') + 1);
            let article = { articleName, comments: [] };
            articles.push(article);
        } else {
            let [userArticleInfo, commentInfo] = line.split(': ');
            userArticleInfo = userArticleInfo.split(' ');
            let currentUser = userArticleInfo[0];
            let currentArticleName = userArticleInfo[3];
            commentInfo = commentInfo.split(', ');
            let commentTitle = commentInfo[0];
            let commentContent = commentInfo[1];

            if (users.includes(currentUser)) {
                let currentArticle = articles
                    .find(ar => ar.articleName === currentArticleName);
                if (currentArticle) {
                    let comment = {
                        user: currentUser,
                        title: commentTitle,
                        content: commentContent
                    };

                    currentArticle.comments.push(comment);
                }
            }
        }
    }

    articles.sort((f, s) => s.comments.length - f.comments.length);

    for (const article of articles) {
        console.log(`Comments on ${article.articleName}`);
        article.comments.sort((f, s) => f.user.localeCompare(s.user))
            .forEach(c => console.log(`--- From user ${c.user}: ${c.title} - ${c.content}`))
    }
}