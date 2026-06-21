function NoticeCard({ notice }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">

      <div className="flex justify-between items-start">

        <div>

          <h3 className="text-xl font-semibold text-gray-800">
            {notice.title}
          </h3>

          <p className="text-sm text-blue-600 mt-2">
            {notice.ward}
          </p>

        </div>

        <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">
          {notice.category}
        </span>

      </div>

      <p className="text-gray-500 mt-4">
        Published: {notice.date}
      </p>

    </div>
  );
}

export default NoticeCard;