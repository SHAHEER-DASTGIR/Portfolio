export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 text-center">
      <h3 className="section-title">Get In Touch</h3>
      <p className="mt-4 max-w-2xl mx-auto text-slate-300 text-justify">
        I’m open to opportunities in <span className="text-[#64ffda]">IoT</span>, 
        <span className="text-[#64ffda]"> embedded systems</span>, 
        <span className="text-[#64ffda]"> firmware development</span>, and 
        <span className="text-[#64ffda]"> hardware verification</span>. 
        With hands-on experience in ESP32, FreeRTOS, Linux device drivers, 
        and RISC-V research, I enjoy bridging low-level hardware with high-level system design.  
        If you have a role, collaboration, or project where my skills can add value, 
        my inbox is always open.
      </p>

      <div className="mt-8">
        <a
          href="mailto:shaheer3313@gmail.com"
          className="inline-block px-6 py-3 border border-[#64ffda] text-[#64ffda] rounded hover:bg-[#64ffda]/10 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
