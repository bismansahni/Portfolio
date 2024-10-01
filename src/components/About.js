const About = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto max-w-3xl px-6">
        {/* Center the content with max width */}
        <h2 className="text-3xl font-semibold mb-4 text-primary">About Me</h2>
        <p className="text-lg text-gray-700">
          Hey there! I'm <em>Bisman Sahni</em>, a <em>code-cruncher</em> and <em>problem-solver extraordinaire</em> currently studying Computer Science at Arizona State University. Whether it's building a disaster recovery platform or helping over 3,000 users with my <em>Refer Me</em> platform, I'm all about creating solutions that actually make a difference. My focus? <strong>Full-stack development and AI/ML</strong>—because why pick one when you can do it all?
        </p>
        <br />
        <p className="text-lg text-gray-700">
          When I'm not lost in code, you'll find me <em>perfecting my Call of Duty Mobile skills</em> or <em>attempting to cook something that doesn't end in smoke</em>. Let's just say, I don't rest until my apps (and my meals) are both smart and snazzy!
        </p>
      </div>
    </section>
  );
};

export default About;
