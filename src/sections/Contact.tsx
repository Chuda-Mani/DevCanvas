import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">Let&apos;s build something great together</h2>
              <p className="text-sm md:text-base mt-2">
                Have an idea, a role or a collaboration in mind? Reach out and let&apos;s talk about it.
              </p>
            </div>
            <div>
              <a href="mailto:kakarlachudamani@gmail.com" className="btn-dark w-max">
                <span>Contact Me</span>
                <ArrowUpRightIcon className="size-4 icon-up-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
