use Library

db.Books.insertMany([
{
Title: "Title1",
Author: "Author1",
Stock: 120,
Price: 450,
Receiver: "Receiver1",
Return_Status: true
},
{
Title: "Title2",
Author: "Author2",
Stock: 90,
Price: 250,
Receiver: "Receiver2",
Return_Status: false
}
])
