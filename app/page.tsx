import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const recipe = [
    {
      id: 1,
      name: "Chicken Sandwich",
      cuisine: "American",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 12,
    },
    {
      id: 2,
      name: "Chicken Sandwich",
      cuisine: "American",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 12,
    },
    {
      id: 1,
      name: "Chicken Sandwich",
      cuisine: "American",
      servings: 4,
      prepTimeMinutes: 15,
      cookTimeMinutes: 12,
    },
  ];

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
    <>
      <div className="xl:px-24 px-10">
        <div className="my-12">
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

          <div className="grid grid-cols pt-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 ">
            {recipe.map((recipe, idx) => (
              <Card
                key={`${recipe.name}-${idx}`}
                className="flex flex-col bg-orange-50 hover:scale-105 ease-in duration-200 xl:min-h-[600px] fancyGradient"
              >
                <CardHeader></CardHeader>
                <CardContent>
                  <CardTitle className="uppercase lg:text-3xl relative font-bold line-clamp-2">
                    {recipe.name}
                  </CardTitle>
                  <p>{recipe.cuisine}</p>
                </CardContent>
                <CardFooter className="flex items-start gap-2 lg:gap-12 lg:flex-row flex-col">
                  <div className="flex flex-col">
                    <p className="text-lg">Servings</p>
                    <p className="text-gray-800">{recipe.servings} MIN</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg">Prep Time</p>
                    <p className="text-gray-800">
                      {recipe.prepTimeMinutes} MIN
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-lg">Cook Time</p>
                    <p className="text-gray-800">
                      {recipe.cookTimeMinutes} MIN
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
