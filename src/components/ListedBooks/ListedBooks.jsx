import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useEffect, useState } from 'react';
import { getStoredReadList } from '../../utility/addToDb';
import { getStoredWishList } from '../../utility/addToWishList';
import Book from '../Book/Book';

const ListedBooks = () => {
    const allBooks = useLoaderData();
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);

    useEffect( () => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map( id => parseInt(id));
        const storedWishList = getStoredWishList();
        const storedWishListInt = storedWishList.map(id => parseInt(id));

        const readBookList = allBooks.filter( book => storedReadListInt.includes(book.bookId) );
        const wishBookList = allBooks.filter( book => storedWishListInt.includes(book.bookId));


        // console.log(storedReadList, storedReadListInt, readBookList);
        // console.log(storedWishList, storedWishListInt, wishBookList);

        setReadList(readBookList);
        setWishList(wishBookList);
    }, [])

    // console.log(allBooks);

    return (
        <div>
            <h3 className="text-3xl my-8">Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wishlist</Tab>
                </TabList>

                <TabPanel>
                    <div className='flex flex-col gap-5'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book> )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    
                <div className='flex flex-col gap-5'>
                        {
                            wishList.map(book => <Book key={book.bookId} book={book}></Book> )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;