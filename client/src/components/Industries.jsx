const industries = [
  "E-Commerce",
  "Healthcare",
  "Education",
  "Real Estate",
  "FinTech",
  "Travel & Hospitality",
  "Fitness & Wellness",
  "Restaurants & Food Services",
];

const Industries = () => {
  return (
    <section className="py-20 bg-[#f8f9ff]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-black mb-10">Industries We Serve</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {industries.map((name, i) => (
            <div
              key={i}
              className="p-6 text-center bg-white rounded-xl border hover:border-blue-600 shadow-sm hover:shadow-md transition font-semibold"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
