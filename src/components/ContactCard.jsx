function ContactCard({ user }) {
  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
              {user.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500">@{user.username}</p>
            </div>
          </div>
        </div>
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3 group/item">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center group-hover/item:bg-blue-200 transition-colors">
              <span className="text-blue-600">📧</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                Email
              </p>
              <p className="text-sm font-medium text-gray-700 truncate">
                {user.email}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 group/item">
            <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center group-hover/item:bg-green-200 transition-colors">
              <span className="text-green-600">📞</span>
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                Phone
              </p>
              <p className="text-sm font-medium text-gray-700">{user.phone}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 group/item">
            <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center group-hover/item:bg-purple-200 transition-colors">
              <span className="text-purple-600">🏢</span>
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                Company
              </p>
              <p className="text-sm font-semibold text-gray-800">
                {user.company.name}
              </p>
              <p className="text-xs text-gray-500 italic">
                {user.company.catchPhrase}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
              <span className="text-orange-600">📍</span>
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-1">
                Address
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {user.address.street}, {user.address.suite}
                <br />
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
