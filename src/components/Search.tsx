export default function Search() {
  return (
    //create a big search bar with black background tailwind
      <input
        className="w-3/6 p-2 text-black outline-none border-b-2 border-gray-600 h-20 text-2xl font-sans focus:border-collapse"
      type="text"
      autoFocus
        placeholder="Search"
      />
  );
}
