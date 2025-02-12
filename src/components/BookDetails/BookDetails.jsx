import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);

    const data = useLoaderData();

    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image, bookName, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    // console.log(typeof bookId, typeof book.bookId)
    // console.log(data, book, bookId,id);
    console.log(book);

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">{bookName}</h1>
                    <p>By: {author}</p>
                    <div className="divider"></div>
                    <p>{category}</p>
                    <div className="divider"></div>
                    <p className="py-6">
                        {review}
                    </p>
                    <div className="flex gap-2">Tag:
                        {
                            tags.map((tag, idx) => <p key={idx}>{tag}</p>)
                        }
                    </div>
                    <div className="divider"></div>
                    <div>
                        <p>Number of Pages: {totalPages}</p>
                        <p>Publisher: {publisher}</p>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <button className="btn btn-outline">Read</button>
                    <button className="ml-4 btn btn-primary">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;