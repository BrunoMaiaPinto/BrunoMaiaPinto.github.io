import { getResume } from "../../services/apiResume";

export const revalidate = 0;
export const metadata = { title: "Resume" };

const {
  basics: {
    name,
    label,
    location: { city, countryCode },
  },
  work,
  education,
  skills,
  languages,
} = await getResume();

const Section = function ({ title, children }) {
  return (
    <div className="mt-3">
      <h2 className="text-md text-orange-500 font-semibold uppercase mb-1">
        {title}
      </h2>
      {children}
    </div>
  );
};

const Skills = function () {
  return (
    <ul className="flex gap-1 ml-4">
      {skills.map((skill) =>
        skill.keywords.map((keyword) => (
          <li
            key={keyword}
            className="py-[5px] px-[4px] text-xs text-[#3e6d8e] bg-[#dfeaf1] inline-block rounded"
          >
            {keyword}
          </li>
        ))
      )}
    </ul>
  );
};

const Education = function () {
  return (
    <ul className="flex justify-between ml-4">
      {education.map(({ area, institution, startDate, endDate }) => (
        <>
          <li key={area}>
            <span className="font-semibold">{area} </span>
            <span>| {institution}</span>
          </li>
          <li>
            <span className="font-bold">{`${startDate} - ${endDate}`}</span>
          </li>
        </>
      ))}
    </ul>
  );
};

const WorkExperience = function () {
  return (
    <div>
      {work.map(({ position, name, startDate, endDate, summary }) => (
        <div key={name}>
          <ul className="flex justify-between gap-1 ml-4">
            <li>
              <div>
                <span className="font-semibold">{position}</span>
                <span className="text-sm"> | {name}</span>
              </div>
            </li>
            <li className="font-bold">{`${startDate} - ${endDate}`}</li>
          </ul>
          <p className="ml-5 mt-2 text-sm mb-3">{summary}</p>
        </div>
      ))}
    </div>
  );
};

const Languages = function () {
  return (
    <ul className="flex gap-8 ml-4">
      {languages.map(({ language, fluency }) => (
        <li key={language} className="flex flex-col">
          <span className="font-semibold">{language}</span>{" "}
          <span className="text-xs italic">{fluency}</span>
        </li>
      ))}
    </ul>
  );
};

export default function page() {
  return (
    <div className="max-w-[820px] m-auto text leading-6">
      <div>
        <h1 className="text-4xl font-thin">{name}</h1>
        <h2 className="text-xl">{label}</h2>
        <span>
          {city}, {countryCode}
        </span>
      </div>

      <Section title="Skills">
        <Skills />
      </Section>

      <Section title="Education">
        <Education />
      </Section>

      <Section title="Work Experience">
        <WorkExperience />
      </Section>

      <Section title="Languages">
        <Languages>|</Languages>
      </Section>
    </div>
  );
}
