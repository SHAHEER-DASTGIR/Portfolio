export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24">
      <h3 className="section-title">Contact</h3>
      <div className="card p-6">
        <p className="text-slate-300">
          I'm open to IoT, embedded, and firmware opportunities. If you have a role or a project
          where I can help, my inbox is always open.
        </p>
        <div className="mt-5">
          <a
            href="mailto:shaheer3313@gmail.com"
            className="inline-block rounded border border-[#64ffda] px-4 py-2 text-[#64ffda] hover:bg-[#64ffda]/10"
          >
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}