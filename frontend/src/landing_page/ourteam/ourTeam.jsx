import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import './ourTeam.css'
import teamData from '../../data/teamData.json'

export default function OurTeam() {
  const { president, coreTeam, teamLeads, members } = teamData

  return (
    <div className="our-team-section bg-black text-white py-16 px-4 md:px-12">
      {/* ---------- HEADER ---------- */}
      <div className="text-center mb-12">
        <h6 className="text-gray-400 uppercase tracking-widest mb-2">Innovate</h6>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Meet the passionate individuals dedicated to advancing mechanical engineering at NIT Sikkim.
        </p>
      </div>

      {/* ---------- PRESIDENT SECTION ---------- */}
      <div className="text-center mb-16">
        <div className="max-w-sm mx-auto bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <img
            src={`${import.meta.env.BASE_URL}${president.img}`}
            alt={president.name}
            className="rounded-xl w-48 h-48 object-cover mx-auto mb-4 border border-gray-700"
          />
          <h3 className="text-2xl font-semibold">{president.name}</h3>
          <p className="text-gray-400 mb-2">{president.role}</p>
          <p className="text-sm text-gray-300">{president.description}</p>
        </div>
      </div>

      {/* ---------- CORE TEAM SECTION ---------- */}
      <div className="container mb-16">
        <div className="row justify-content-center g-4">
          {coreTeam.map((member, index) => (
            <div key={index} className="col-12 col-md-4">
              <div className="team-card bg-zinc-900 p-6 rounded-2xl h-full text-center">
                <img
                  src={`${import.meta.env.BASE_URL}${member.img}`}
                  alt={member.name}
                  className="rounded-xl w-40 h-40 object-cover mx-auto mb-4 border border-gray-700"
                />
                <h4 className="text-xl font-semibold">{member.name}</h4>
                <p className="text-gray-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-300">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- TEAM LEADS (AUTO CAROUSEL) ---------- */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Team Leads</h2>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        dir="rtl"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={3000}
        onSwiper={(swiper) => {
          const el = swiper.el
          el.addEventListener('mouseenter', () => swiper.autoplay.stop())
          el.addEventListener('mouseleave', () => swiper.autoplay.start())
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {teamLeads.map((lead, index) => (
          <SwiperSlide key={index}>
            <div className="team-card bg-zinc-900 p-6 rounded-2xl text-center mx-auto max-w-xs">
              <img
                src={`${import.meta.env.BASE_URL}${lead.img}`}
                alt={lead.name}
                className="rounded-xl w-36 h-36 object-cover mx-auto mb-3 border border-gray-700"
              />
              <h4 className="text-lg font-semibold">{lead.name}</h4>
              <p className="text-gray-400">{lead.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ---------- MEMBERS (AUTO CAROUSEL) ---------- */}
      <div className="text-center mt-16 mb-8">
        <h2 className="text-3xl font-bold mb-4">Members of Yantrika</h2>
      </div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        dir="rtl"
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={4000}
        onSwiper={(swiper) => {
          const el = swiper.el
          el.addEventListener('mouseenter', () => swiper.autoplay.stop())
          el.addEventListener('mouseleave', () => swiper.autoplay.start())
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card bg-zinc-900 p-4 rounded-2xl text-center mx-auto max-w-xs">
              <img
                src={`${import.meta.env.BASE_URL}${member.img}`}
                alt={member.name}
                className="rounded-xl w-32 h-32 object-cover mx-auto mb-3 border border-gray-700"
              />
              <h4 className="text-md font-semibold">{member.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
