import { Badge } from "@/components/ui/badge";
export default function Home() {
  const cuisines: Array<string> = [
    "All",
    "Japanese",
    "Mexican",
    "Pakistani",
    "Indian",
    "American",
    "Mediterranean",
    "Italian",
    "Greek",
  ];
  return (
    <div>
      {cuisines.map((cuisine, idx) => (
        <Badge
          key={`${cuisine}-${idx}`}
          variant={"outline"}
          className="border-orange-800 text-gray-900
         text-lg mx-2 my-1 hover:cursor-pointer bg-orange-50 hover:scale-110 ease-in duration-200 
         "
        >
          {cuisine}
        </Badge>
      ))}
    </div>
  );
}
