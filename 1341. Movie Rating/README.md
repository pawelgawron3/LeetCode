# 1341. Movie Rating

## Problem

Table: `Movies`

`movie_id` is the primary key (column with unique values) for this table.
`title` is the name of the movie.
Each movie has a unique title.

Table: `Users`

`user_id` is the primary key (column with unique values) for this table.
The column `'name'` has unique values.

Table: `MovieRating`

(`movie_id`, `user_id`) is the primary key (column with unique values) for this table.
This table contains the `rating` of a movie by a user in their review.
`created_at` is the user's review date.

Write a solution to:

- Find the name of the user who has rated the greatest number of movies. In case of a tie, return the lexicographically smaller user name.
- Find the movie name with the **highest average** rating in _February 2020_. In case of a tie, return the lexicographically smaller movie name.
