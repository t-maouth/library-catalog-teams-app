class LibraryCatalog {
    constructor() {
        this.recents = {
            //hardcoding in the "recent" books and their content on initialization
            "The Great Gatsby": {
                description: "The Great Gatsby is a 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island in the summer of 1922. The story primarily concerns the young and mysterious millionaire Jay Gatsby and his quixotic passion and obsession with the beautiful former debutante Daisy Buchanan. Considered to be Fitzgerald's magnum opus, The Great Gatsby explores themes of decadence, idealism, resistance to change, social upheaval, and excess, creating a portrait of the Roaring Twenties that has been described as a cautionary tale regarding the American Dream.",
                author: "Scott Fitzgerald",
                isCheckedOut: false,
                copiesAvailable: 3
                
            },
            "Microsoft Office 2003": {
                description:"If you have Microsoft Office 2003 For Dummies and just use it to create documents and for e-mail, that’s like having the ultimate gourmet kitchen and only cooking frozen dinners or having a 42” plasma high-definition, sound surround TV and only watching old reruns. This book will help you take control of Office 2003 and use it to take control of your life—at work or at home. It covers Word, Excel, PowerPoint, Outlook, and Access. (Note that not all versions of Office 2003 have Access.) You’ll learn how to create all kinds of documents, set up and use databases, create spreadsheets and do all kinds of numerical calculations and computations, and present your creations in style.",
                author: "Microsoft",
                isCheckedOut: false,
                copiesAvailable: 1
            }
            
        }

        this.discussions = {
            //hardcoding the dicussions for each of the books with a list of comments with id and text
            "The Great Gatsby": {
                comments: [{
                    id: 1,
                    text: "This portion of the novel was very interesting to me because I had never realized how large a part owl Eyes played in the novel."
                },
                {
                    id: 2,
                    text: "This portion of the novel was very interesting to me because I had never realized how large a part owl Eyes played in the novel."
                },
                {
                    id: 3,
                    text: "This portion of the novel was very interesting to me because I had never realized how large a part owl Eyes played in the novel."
                },
                {
                    id: 4,
                    text: "This portion of the novel was very interesting to me because I had never realized how large a part owl Eyes played in the novel."
                },
                {
                    id: 5,
                    text: "This portion of the novel was very interesting to me because I had never realized how large a part owl Eyes played in the novel."
                }]

            },
            "Microsoft Office 2003": {
                comments: [{
                    id: 1,
                    text: "Boring. Would not read again."
                }]
            }

        }
    }

    searchTitle(title) {
        if((title in this.recents)) {
            return(this.recents[title]);
        } else {
            throw Error;
        }
    }

    checkOut(title) {
        try { 
            book = this.searchTitle(title)
            if(!book.isCheckedOut && book.copiesAvailable>=1) {
                book.isCheckedOut = true;
                book.copiesAvailable--;
                return("This book has been successfully checked out.")
            } else if (!book.isCheckedOut) {
                return("There are no copies available.")
            } else {
                return("You have already checked this book out.")
            }
        } catch (error) {
            return("An error occurred.")
        }
    }

    
}