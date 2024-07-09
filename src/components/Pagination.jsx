const Pagination = () => {
    return (
      <div className="flex justify-center items-center space-x-2">
        <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-400 cursor-not-allowed" disabled>
          &lt;
        </button>
        <button className="px-3 py-1 rounded-md bg-yellow-500 text-white">1</button>
        <button className="px-3 py-1 rounded-md border border-gray-300">2</button>
        <button className="px-3 py-1 rounded-md border border-gray-300">...</button>
        <button className="px-3 py-1 rounded-md border border-gray-300">9</button>
        <button className="px-3 py-1 rounded-md border border-gray-300">10</button>
        <button className="px-3 py-1 rounded-md border border-gray-300">&gt;</button>
      </div>
    );
  };
  
  export default Pagination;