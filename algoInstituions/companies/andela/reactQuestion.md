Task
In this challenge, your task is to create a component which contains a simple search box offering users the ability to locate and view a catalog of books.

After coding, there will be a brief written response for you to complete (instructions will be given below).

Props
The BookSearch component will be provided with props containing an array of objects describing the books in a collection. The format for props.books will follow this example:

<BookSearch books={[
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "language": "English",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "language": "Italian",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  /* ... more books ... */
]} />
Rendering
The BookSearch component should render specific elements by data-testid properties, which will be used by the testing suite to validate your code. The elements are as follows:

<div data-testid="book">, which acts as a container for a single book's data. The total number of book elements that will be rendered will be equal to the number of search results. For each book that is displayed containing the testid book, all fields available in the props.books object (author, title, pages, etc) should be displayed.

The formatting and child elements of a book has no predefined structure; the test suite will check substrings on the returned HTML. Rendered book elements should follow the same ordering sequence as props.books.

A series of <input /> elements. These elements will be used to filter the search results, and should have one of each of the following testid names:
<input data-testid="author" />
<input data-testid="title" />
<input data-testid="country" />
<input data-testid="language" />
<input data-testid="year" />
Searching
Initially, and whenever all input fields are empty, all books should be shown. Any keystrokes performed on one of the input fields should filter the displayed books using the relevant input field's prop value. The filtering algorithm should trim leading and trailing whitespace from the input value and perform case-insensitive substring matches.

For example, if the above array of two books were provided as props.books and the user typed achebe into the author input box, the shown results would filter out The Divine Comedy and only render Things Fall Apart.

Multiple input fields can be used to add further constraints to the search filtering; if the user also added 2006 to the year field in the above example, no books would be shown because Things Fall Apart was published in 1958, not in 2006. All changes should be dynamic per key-stroke (the test suite will send the "change" event to the input elements).

For the purposes of this challenge, you can assume that props.books contains no more than 100 items and that all fields will be present on each book (the props.books array will be well-formatted).

A full list of books which you may use for testing is provided in ./sample_data/books.json. The test suite will use portions of this array only.

Design and Style
Once you've achieved correct functionality, please add minimal CSS necessary to present a clean and reasonably attractive user interface; there's no need for in-depth styling.

Demo
This demo illustrates the expected behavior of the component; the style shown here need not be copied.

The props the same as the example props which the Web Preview is populated with by default. You can view and change these in your workspace in ./src/components/App.jsx.