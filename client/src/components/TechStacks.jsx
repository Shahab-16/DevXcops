import Slider from "react-slick";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAndroid,
  FaApple,
  FaDocker,
  FaGitAlt,
  FaPhp,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiFastapi,
  SiKubernetes,
  SiRedis,
  SiFirebase,
  SiGraphql,
  SiLaravel,
  SiFlutter,
  SiReact,
  SiSupabase,
  SiPrisma,
} from "react-icons/si";

const TechStack = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  const techs = [
    { icon: <SiNextdotjs />, label: "Next.js" },
    { icon: <FaReact />, label: "React" },
    { icon: <SiReact />, label: "React Native" },
    { icon: <SiFlutter />, label: "Flutter" },
    { icon: <FaAndroid />, label: "Android" },
    { icon: <FaApple />, label: "iOS" },

    // Web & styling
    { icon: <SiTailwindcss className="text-purple-800" />, label: "Tailwind CSS" },
    { icon: <SiJavascript />, label: "JavaScript" },
    { icon: <SiTypescript />, label: "TypeScript" },

    // Backend
    { icon: <SiNodedotjs />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <FaPhp />, label: "PHP" },
    { icon: <SiLaravel />, label: "Laravel" },
    { icon: <SiDjango />, label: "Django" },
    { icon: <SiFastapi />, label: "FastAPI" },
    { icon: <SiGraphql />, label: "GraphQL" },
    { icon: <FaPython />, label: "Python" },

    // Databases
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiMysql />, label: "MySQL" },
    { icon: <SiPostgresql />, label: "PostgreSQL" },
    { icon: <SiRedis />, label: "Redis" },
    { icon: <SiFirebase />, label: "Firebase" },
    { icon: <SiSupabase />, label: "Supabase" },
    { icon: <SiPrisma />, label: "Prisma ORM" },

    // DevOps & Tools
    { icon: <FaDocker />, label: "Docker" },
    { icon: <SiKubernetes />, label: "Kubernetes" },
    { icon: <FaGitAlt />, label: "Git" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl mx-auto font-bold text-black mb-12">
          Our Technology Expertise
        </h2>

        <Slider {...settings}>
          {techs.map((item, index) => (
            <div key={index} className="flex justify-center">
              <div className="flex flex-col items-center text-gray-800">
                <div className="text-5xl text-purple-800">{item.icon}</div>
                <p className="mt-2 font-semibold">{item.label}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TechStack;
