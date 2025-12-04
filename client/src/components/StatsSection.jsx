const stats = [
  { number: "50+", label: "Projects Completed" },
  { number: "20+", label: "Brands Built" },
  { number: "15+", label: "Industries Served" },
  { number: "99%", label: "Client Satisfaction" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <h3 className="text-4xl font-extrabold text-blue-600">{s.number}</h3>
            <p className="text-gray-700 mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
