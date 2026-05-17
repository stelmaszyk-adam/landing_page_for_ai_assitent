export default function Card({ icon: Icon, title, description, className = '' }) {
  return (
    <div className={`p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}>
      {Icon && (
        <div className="w-12 h-12 rounded-lg bg-primary-50 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary-600" />
        </div>
      )}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
