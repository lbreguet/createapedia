# Createapedia

## Back-End Repo
https://github.com/lbreguet/full-stack-project-rails-api

## Client Link
https://lbreguet.github.io/createapedia

## What is it?
"Createapedia" is essentially a blog. It was supposed to be a Wikipedia mirror,
but then I thought, "'Wikipedia' is essentially a blog of facts that anyone can
edit." However, I didn't want everyone to be able to edit everything, thus
"Createapedia" was born.

## Technologies Used
  1. Ruby
  2. Rails
  3. JavaScript
  4. jQuery
  5. HTML
  6. CSS
  7. Handlebars
  8. SQL

## Development Process
I started my project by first creating resources. Of course I needed to know
what resources to have. So I started mapping out my ERD's, looking at the
different relationships I could make between each resource. I thought about
making four different tables in the beginning, but then I realized that I just
needed to scaffold only one main resource, `articles`. But the issue I was
facing was making my app readable by users who weren't authenticated, and
writable by users who were. The authenticated users were only able to edit the
articles that they themselves created. So in my `article_serializer` I had to
define a method called `editable` that would return true if the scope was equal
to the object of the user. Then I started building the framework of my
front-end. I created forms for sign-up, sign-in, change-password, sign-out, etc.
After this I started defining the API methods on the front-end. In doing so I
realized that my `editable` method was returning `false`. This was because my
`show` action wasn't passing in a token. But I didn't want to only have
authenticated. So I created another `show` action for authenticated that only
comes up once they are signed in. I planned on using handlebars from the start
because I thought that it would be an easier to make my articles show up on the
page; it just appends in a `div`. I also made it so, using handlebars, that a
user, if the article belongs to them, can delete and edit their article without
passing in an id.

## Things To Improve
There were many things I wanted to add in my project. For example I wanted my
search bar to be able to pass in another attribute other than the id. And I
wanted a double-click handler on the different titles in the menu that utilizes
the `show` action, kind of like clicking on a link in Wikipedia.

## User stories
  1. A user should be able to sign-in to website.
  2. A user should be able to receive information upon request.
  3. A user should be able to create new articles.
  4. A user should be able to edit their articles.
  5. A user should have a list of articles.
  6. A user should be able to view other articles created by others.
  7. A user should be able to delete their article.
  8. A user should be able to sign-out of the website.
  9. A user should have a comfortable experience when traversing the website.

## Wireframe
![alt text](https://github.com/lbreguet/createapedia/blob/master/wireframe-1.JPG "Wireframe")
![alt text](https://github.com/lbreguet/createapedia/blob/master/wireframe-2.JPG "Wireframe")
