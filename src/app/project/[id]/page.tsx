import { Carousel } from "@/components/ui/carousel"
import { projects } from "@/lib/Constants"
import { redirect } from "next/navigation"
import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: PageProps) => {
  const project = projects.find(project => project.id === Number(params?.id))

  if (!project) {
    redirect("/")
  }

  const slides = project.images.map(image => {
    return {
      title: project.title,
      src: image
    }
  })
  return (
    <div className="container min-h-screen mx-auto px-4 py-8 bg-black">
      <Link href={"/#projects"} className="fixed flex gap-2 top-0 left-0 p-2 m-4 z-20 text-white hover:text-primary bg-white/10 rounded-full transition-all">
        <ArrowLeft /> Regresar
      </Link>
      <h1 className="text-indigo-400 text-center text-3xl md:text-5xl font-bold tracking-tight">
        {project.title}
      </h1>
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slides} />
      </div>
      <section className="mx-auto mt-8 px-4 z-10 space-y-10 flex flex-col items-center justify-center gap-8 max-w-5xl">
        <p className="text-lg text-gray-300 text-wrap"><span className="font-bold text-indigo-400 text-lg">Descripción:</span> {project.longDescription}</p>

        <article className="flex flex-col md:flex-row justify-between items-center gap-4">
          <CardSpotlight className="min-h-96 min-w-96">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">Desafíos enfrentados</p>
            <ul className="list-none text-neutral-200 mt-4 relative z-20">
              {project.challenges.map((challenge, index) => (
                <Step title={challenge} key={index} />
              ))}
            </ul>
          </CardSpotlight>

          <CardSpotlight className="min-h-96 min-w-96">
            <p className="text-xl font-bold relative z-20 mt-2 text-white">Lecciones aprendidas</p>
            <ul className="list-none text-neutral-200 mt-4 relative z-20">
              {project.learnings.map((learning, index) => (
                <Step title={learning} key={index} />
              ))}
            </ul>
          </CardSpotlight>
        </article>
        <p className="text-xl font-bold relative z-20 mt-2 text-white">Tecnologias usadas</p>
        <div className="flex justify-center items-center flex-wrap gap-2 mt-4">
          {project.tags.map(tag => (
            <div key={tag} className="flex items-center justify-center px-4 py-2 mx-2 bg-gray-800 rounded-full">
                <p className="text-md text-primary px-3 py-1">{tag}</p>
            </div>
          ))}
        </div>
        
      </section>
    </div>
  )
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default Page
