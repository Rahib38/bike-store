import Imtiaz from "../assets/Imtiaz.jpg";
import Tanjid from "../assets/Tanjid.jpg";
import Nadim from "../assets/Nadim.jpg";
import Mehedi from "../assets/Mehedi.jpg";
import Ridoy from "../assets/Ridoy.jpg";

const teamMembers = [
  {
    name: "Mehedi Hasan",
    role: "Team Leader // FullStack Developer",
    roll: "683304",
    bio: "An experienced team leader responsible for guiding the team, assigning tasks, and ensuring smooth collaboration across all stages of development. Plays a key role in decision-making, problem-solving, and maintaining team motivation while ensuring project goals are met on time with quality.",
    image: Mehedi,
  },
  {
    name: "Imtiyaz Siddique",
    role: "Co-Leader // Frontend Developer",
    roll: "683327",
    bio: "An experienced Co leader responsible for guiding the team, assigning tasks, and ensuring smooth collaboration across all stages of development. Plays a key role in decision-making, problem-solving, and maintaining team motivation while ensuring project goals are met on time with quality.",
    image: Imtiaz,
  },
    {
    name: "Nadimul Rahib",
    role: "FullStack Developer",
    roll: "683328",
    bio: "A motivated web professional with a strong foundation in web development, having learned and practiced modern frontend and backend technologies. Currently working with Content Management Systems (CMS), focusing on building, customizing, and maintaining dynamic websites while continuously improving technical skills and real-world development experience.",
    image: Nadim,
  },
  {
    name: "Md. Tanjid Islam",
    role: "Frontend Developer",
    roll: "683325",
    bio: "An experienced team leader responsible for guiding the team, assigning tasks, and ensuring smooth collaboration across all stages of development. Plays a key role in decision-making, problem-solving, and maintaining team motivation while ensuring project goals are met on time with quality.",
    image: Tanjid,
  },


  {
    name: "Ridowan Bin Karim",
    role: "Frontend Developer",
    roll: "683313",
    bio: "An experienced team leader responsible for guiding the team, assigning tasks, and ensuring smooth collaboration across all stages of development. Plays a key role in decision-making, problem-solving, and maintaining team motivation while ensuring project goals are met on time with quality.",
    image: Ridoy,
  },
  // {
  //   name: "Imtiyaz Siddique",
  //   role: "Team Leader",
  //   roll: "683327",
  //   bio: "An experienced team leader responsible for guiding the team, assigning tasks, and ensuring smooth collaboration across all stages of development. Plays a key role in decision-making, problem-solving, and maintaining team motivation while ensuring project goals are met on time with quality.",
  //   image: Imtiaz,
  // },
  // {
  //   name: "Imtiyaz Siddique",
  //   role: "Team Leader",
  //   roll: "683327",
  //   bio: "An experienced team leader responsible for guiding the team, assigning tasks, and ensuring smooth collaboration across all stages of development. Plays a key role in decision-making, problem-solving, and maintaining team motivation while ensuring project goals are met on time with quality.",
  //   image: Imtiaz,
  // },
];

export default function TeamMember() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="border-b bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase leading-tight">
            Meet Our <br className="hidden md:block" /> Team
          </h2>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-gray-500">
            A collective of passionate individuals dedicated to excellence and
            committed to building impactful solutions.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="mx-auto mb-6 h-64 w-full overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Info */}
                <div className="text-center">
                  <span className="inline-block rounded-full bg-gray-100 px-4 py-1 text-xs font-semibold text-gray-600">
                    Roll: {member.roll}
                  </span>

                  <h3 className="mt-4 text-2xl font-bold text-gray-900">
                    {member.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium uppercase tracking-wide text-black ">
                    {member.role}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
