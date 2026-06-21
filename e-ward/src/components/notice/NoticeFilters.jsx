function NoticeFilters() {
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        <input
          type="text"
          placeholder="Search Title"
          className="border rounded-lg p-3"
        />

        <select className="border rounded-lg p-3">
          <option>All Wards</option>
          <option>Ward 1</option>
          <option>Ward 2</option>
          <option>Ward 3</option>
        </select>

        <select className="border rounded-lg p-3">
          <option>All Categories</option>
          <option>Tax</option>
          <option>Birth Registration</option>
        </select>

        <button className="bg-blue-600 text-white rounded-lg p-3">
          Search
        </button>

      </div>

    </div>
  );
}

export default NoticeFilters;