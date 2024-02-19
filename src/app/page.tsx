import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";

export default function Home() {
  const skills: SkillProps[] = [
        { imageUrl: "/figma.jpg", alt: "Figma Logo", href: "https://www.figma.com" },
        { imageUrl: "/illustrator.jpg", alt: "Adobe Illustrator Logo", href: "https://www.adobe.com/ca/products/illustrator.html" },
        { imageUrl: "/procreate.jpg", alt: "Procreate Logo", href: "https://procreate.com/" },
        { imageUrl: "/fusion.jpg", alt: "Fusion360 Logo", href: "https://www.autodesk.com/ca-en/products/fusion-360/overview" },
        { imageUrl: "/rhino.jpg", alt: "Rhino Logo", href: "https://www.rhino3d.com/" },

    ]
  return (
    <main className="flex flex-col items-center justify-between p-12 md:p-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-40 mt-12">
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Hi, I&apos;m Mariana Mejia!</h1>
          <p>
            A product designer and user researcher based in Toronto, Canada.
            Experienced in UX/UI, accessibility, user research, open source
            design, and design systems.
          </p>
          <p>I&apos;m looking for new grad opportunities starting May 2024!</p>
          <Link
            className="bg-[#f6f6f6] border-[#ed7a68] border grow-0 max-w-max py-2 px-4 rounded-full"
            href={"https://google.com"}
          >
            Download CV
          </Link>
        </div>
        <div className="flex align-center justify-center">
          <div className="relative w-[128px] h-[174px] md:w-[295px] md:h-[400px]">
            <Image
              className=""
              src={"/mariana.jpg"}
              fill={true}
              alt="A colorful illustration of Mariana Mejia"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row">
        <h2 className="text-xl font-bold">Skills</h2>
      </div>
      <div className="flex flex-row gap-4">
                {skills.map(skill => <SkillItem key={skill.imageUrl} {...skill} />)}
            </div>
    </main>
  );
}

type SkillProps = {
  imageUrl: string;
  alt: string;
  href: string;
};

function SkillItem({ imageUrl, href, alt }: SkillProps): ReactElement {
  return (
    <Link href={href} className="h-12 w-12 relative">
      <Image src={imageUrl} fill={true} alt={alt} />
    </Link>
  );
}
