import NoticeCard from "../components/notice/NoticeCard";
import NoticeFilters from "../components/notice/NoticeFilters";
import logo from "../assets/nepal-sarkar.png";

function NoticeBoard() {
  const notices = [
    {
      id: 1,
      title: "Ward 5 Tax Collection Notice",
      ward: "Ward 5",
      category: "Tax",
      date: "2026-06-21",
    },
    {
      id: 2,
      title: "Birth Registration Awareness Program",
      ward: "Ward 7",
      category: "Registration",
      date: "2026-06-20",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-6">
  <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">

    <img
      src={logo}
      alt="Government of Nepal"
      className="w-16 h-16 object-contain"
    />

    <div>
      <p className="text-sm uppercase tracking-wider text-blue-100">
        Government of Nepal
      </p>

      <h1 className="text-4xl font-bold">
        E-Ward Notice Board
      </h1>
    </div>

  </div>
</div>
     

      <div className="max-w-7xl mx-auto p-6">

        <NoticeFilters />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

          <div className="lg:col-span-2 space-y-6">

            {notices.map((notice) => (
              <NoticeCard
                key={notice.id}
                notice={notice}
              />
            ))}

          </div>

          <div className="bg-white rounded-xl shadow-sm p-5">

            <h2 className="text-2xl font-semibold mb-4">
              Recent Notices
            </h2>

            <div className="space-y-3">

              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className="bg-blue-500 text-white p-4 rounded-lg"
                >
                  {notice.title}
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default NoticeBoard;