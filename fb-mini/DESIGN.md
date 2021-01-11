Tables:

Users:
Table of all the users. For each user, stores...
{
    User ID- string
    First name- string
    Last name- string
    Date of birth- date
    Password- string
    Bio- string
}

Posts:
Table of all the posts. For each post, stores...
{
    User ID of poster- string, relates to the user table via the ID
    Text- string
    Date posted- date
    Number of likes- int
}

Friends:
Table of friendships. For each friendship, stores...
{
    User ID of requestor- string, relates to the user table via the ID
    User ID of requested- string, relates to the user table via the ID
    Date requested- date
    Status (accepted/declined/requested)- enum
}