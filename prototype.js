var Course = function(title, author){
    this.author = author;
    this.title = title;
}

Course.prototype.toString = function(){
    return this.title + this.author
}