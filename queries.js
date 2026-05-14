db.Books.find({ Price: { $gt: 300 } })

db.Books.updateMany(
{ Stock: { $gt: 100 } },
{ $inc: { Price: -100 } }
)

db.Books.updateMany(
{ Stock: { $gt: 100 } },
{ $set: { Discount: 50 } }
)
