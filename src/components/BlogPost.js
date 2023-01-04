export class BlogPost{
    constructor(post, location){
        this.post = post;
        this.location = location;
    }

    createBlogPost(){
        let mainBlogPostDiv = $('<div class="main-blog-post"></div>');
        let blogPostDiv = $('<div class="blog-post"></div>');
        let blogDiv = $('<div class="blog"></div>');

        $(mainBlogPostDiv).append(blogPostDiv);
        $(blogPostDiv).append(blogDiv);

        let heading = $('<h2>').text(this.post.title);
        let paragraph = $('<p>').text(this.post.content);
        let link = $('<a>').attr('href',this.post.utl).text('Chci dočíst');

        $(blogDiv).append(heading);
        $(blogDiv).append(paragraph);
        $(blogDiv).append(link);

        let image = $('<img>').attr('src',this.post.image).attr('alt',this.post.title);

        $(blogPostDiv).append(image);
        $(this.location).append(mainBlogPostDiv);
    }
}