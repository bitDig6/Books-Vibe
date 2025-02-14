import { useLoaderData, useParams } from "react-router";
import { addToStoredReadList } from "../../utility/addToDb";
import { addToWishList } from "../../utility/addToWishList";

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);

    const { image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    // console.log(typeof bookId, typeof book.bookId)
    // console.log(data, book, bookId,id);
    console.log(book);

    const handleMarkAsRead = id => {
        addToStoredReadList(id);
    }

    const handleAddToWishList = id => {
        addToWishList(id);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p className="mt-5 text-xl"><b>By:</b> {author}</p>
                    <div className="divider"></div>
                    <p className="text-lg font-bold">{category}</p>
                    <div className="divider"></div>
                    <p className="py-6">
                        {review}
                    </p>
                    <div className="flex gap-2 items-center"><b>Tags:</b>
                        {
                            tags.map((tag, idx) => <p className="bg-green-400 rounded-xl text-white font-bold p-2" key={idx}>{tag}</p>)
                        }
                    </div>
                    <div className="divider"></div>
                    <div className="space-y-4 mb-5">
                        <p><b>Number of Pages:</b> {totalPages}</p>
                        <p><b>Publisher:</b> {publisher}</p>
                        <p><b>Year of Publishing:</b> {yearOfPublishing}</p>
                        <p><b>Rating:</b> {rating}</p>
                    </div>
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline">Mark as Read</button>
                    <button onClick={() => handleAddToWishList(bookId)} className="ml-4 btn btn-primary">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;