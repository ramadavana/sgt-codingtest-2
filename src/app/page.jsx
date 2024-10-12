import Image from "next/image";
import Link from "next/link";

const section_3 = [
  {
    title: "Emergency Aid. WAR 2022.",
    info: "providing food and medicine to the shelters and animals which lost their homes and families due to the war",
  },
  {
    title: "Non-commercial feed line",
    info: "construction of industrial production base where food for shelters will be produced on a free basis",
  },
  {
    title: "Education and Control",
    info: "lectures on communication, organization and coordination of process control over the use of aid",
  },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Section 1 */}
      <section className="w-screen h-screen bg-[#fcf944] items-center flex">
        <div className="container flex flex-col items-center justify-center mx-auto align-middle">
          <div className="grid items-center grid-cols-2 gap-y-4 mb-11">
            <div className="flex items-center justify-center">
              <Image
                src="/images/dogwrite1.svg"
                alt="Picture of the author"
                width={85}
                height={85}
              />
            </div>

            <h1 className="flex flex-col text-[24px] font-bold leading-none">
              <span>Innovative</span>
              <span>Solutions</span>
              <span>for</span>
              <span>Animals</span>
            </h1>

            <p className="text-[14px] col-span-2 text-center">charity organization</p>
          </div>

          <div className="flex flex-row gap-5">
            <div className="flex items-center text-[28px] text-black">
              <ion-icon name="logo-youtube"></ion-icon>
            </div>

            <div className="flex items-center text-[28px] text-black">
              <ion-icon name="logo-instagram"></ion-icon>
            </div>

            <div className="flex items-center text-[28px] text-black">
              <ion-icon name="logo-facebook"></ion-icon>
            </div>

            <div className="flex items-center text-[28px] text-black">
              <ion-icon name="logo-twitter"></ion-icon>
            </div>

            <div className="flex items-center text-[28px] text-black">
              <ion-icon name="logo-whatsapp"></ion-icon>
            </div>
          </div>
        </div>

        <div className="fixed z-50 transition-all duration-300 top-7 right-7">
          <div class="group relative block h-full bg-white before:absolute before:inset-0 before:border-none before:border-black">
            <div class="h-full border-4 border-black bg-white transition group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:bg-transparent">
              <p class="text-[15px] px-2 py-1">donate</p>
            </div>
          </div>
        </div>

        <div className="fixed z-50 bottom-3 right-3">
          <Link
            href="/"
            className="flex flex-row items-center justify-center gap-2 px-2 py-1 bg-white rounded-md shadow-md">
            <div className="flex items-center text-[16px] text-blue-500">
              <ion-icon name="logo-web-component"></ion-icon>
            </div>
            <p className="text-[12px] tracking-tighter font-bold">Made in Webflow</p>
          </Link>
        </div>

        <div className="absolute flex items-center justify-center w-full bottom-3 z-50 animate-bounce text-[24px]">
          <ion-icon name="arrow-down-outline"></ion-icon>
        </div>
      </section>

      {/* Section 2 */}
      <section className="w-screen bg-white p-9">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <h1 className="text-[30px] font-bold">We are</h1>

              <p className="text-[14px]">
                team of like-minded people, socially active companies, media personalities,
                volunteers who help low-income shelters and foster carers to support homeless
                animals.
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="text-[30px] font-bold">Our primary goal</h1>

              <p className="text-[14px]">
                is to provide animals with the most necessary things - food, medicine, and urgent
                needs for the livelihood of shelters. We believe in our power and the power of
                conscious citizens who care about the environment and their health, who understand
                the importance of helping each other, especially our little friends. Growth begins
                with your care for your loved ones. Animals are one of the closest creatures to
                humans who remain with us throughout our lives. We all know the healing power of
                warmth, grace, and big loving eyes.
              </p>

              <blockquote className="my-2 text-[14px] italic border-l-4 border-pink-300 py-4 ml-4 px-4">
                <p>&quot;Animals need to have friends. Just like humans.&quot;</p>

                <p>- James Herriot, All Creatures Great and Small</p>
              </blockquote>

              <p className="text-[14px]">
                Who else if not we should support our younger brothers, especially in difficult
                times? Let&apos;s be friends!
              </p>
            </div>
          </div>

          <iframe
            className="w-full h-[170px] border-4 border-black"
            src="https://www.youtube.com/embed/5Wk1rp99B7o?si=y8afeyZbz-bjFMZk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen></iframe>
        </div>
      </section>

      {/* Section 3 */}
      <section className="w-screen p-9 bg-[#3e88ff]">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-1">
            <h1 className="text-[30px] font-bold text-white">Our projects</h1>

            <p className="text-[14px] text-white">
              are very different in terms of priority, scale and complexity of implementation
            </p>
          </div>

          <div className="relative block h-full group before:absolute before:inset-0 before:border-none before:border-black">
            <div className="flex flex-col items-center justify-center gap-2 text-white transition-all duration-300 bg-black border-4 border-white px-9 py-7 group-hover:-translate-y-2 group-hover:translate-x-2">
              <h1 className="text-[22px] font-bold">{section_3[0].title}</h1>

              <p className="text-[14px] leading-tight">{section_3[0].info}</p>
            </div>
          </div>

          <div className="relative block h-full group before:absolute before:inset-0 before:border-none before:border-black">
            <div className="bg-[#31BE32] border-white border-4 text-white px-9 py-7 gap-2 flex flex-col items-center justify-center group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300">
              <h1 className="text-[22px] font-bold">{section_3[1].title}</h1>

              <p className="text-[14px] leading-tight">{section_3[1].info}</p>
            </div>
          </div>

          <div className="relative block h-full group before:absolute before:inset-0 before:border-none before:border-black">
            <div className="bg-[#FF97D0] border-white border-4 text-white px-9 py-7 gap-2 flex flex-col items-center justify-center group-hover:-translate-y-2 group-hover:translate-x-2 transition-all duration-300">
              <h1 className="text-[22px] font-bold">{section_3[2].title}</h1>

              <p className="text-[14px] leading-tight">{section_3[2].info}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
