Tables:

Users:
Table of all the users. For each user, stores...
{
    User ID- string
    First name- string
    Last name- string
    Birthday- date
    Email- string
    Password- string
    Bio- string
}

Posts:
Table of all the posts. For each post, stores...
{
    ID- string
    User ID of poster- string, relates to the user table via the ID
    Text- string
    Date posted- date
    Number of likes- int
}

Friends:
Table of friendships. For each friendship, stores...
{
    ID- string
    User ID of requester- string, relates to the user table via the ID
    User ID of requestee- string, relates to the user table via the ID
    Date requested- date
    Status (accepted/declined/requested)- enum
}