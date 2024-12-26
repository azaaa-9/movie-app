import { Header } from "@/app/_components/Header";
import { Options } from "../../_components/constants/type"

type Props={
    params: {
        id: string;
    }
}
export default async function Page ({ params }: Props) {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}`,
  Options
    ); 

    const data = await response.json();
    return(
        <div>
          <Header />
            <p className="text-2xl font-bold">{data.title}</p>
            <p>{data.release_date}</p>
            <p>{data.poster_path}</p>
            <p>{data.overview}</p>
            
            </div>
    )
}