import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
      Card,
      CardDescription,
      CardHeader,
      CardTitle,
} from "@/components/ui/card";
import { FacebookIcon, Github, Twitter } from "lucide-react";
import Link from "next/link";

const page = () => {
  const socials = [
    {
      link: "./",
      name: "Facebook",
      logo: <FacebookIcon/>,
    },
    {
      link: "./",
      name: "Github",
      logo: <Github />,
    },
    {
      link: "./",
      name: "Twitter",
      logo: <Twitter />,
    },
  ];
  return (
    <div className="flex justify-center items-center h-full">
      <Card className="w-96 flex justify-center items-center p-5 mt-5 flex-col">
        <Avatar className="h-[100px] w-[100px] ">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="profile picture"
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        {/* details  */}
        <div>
          <CardHeader className="flex flex-col items-center">
            <CardTitle>Ab Rahman</CardTitle>
            <CardDescription>abdurrahmanabid33@gmail.com</CardDescription>
          </CardHeader>
        </div>
        {/* Social media */}
        <div>
          {socials.map((items, id) => (
            <div key={id} className="flex m-2 gap-4">
              <div>{items.logo}</div>
              <Link href={items.link} className="underline hover:text-gray-500 hover:underline-offset-0 hover:transition-colors" >{items.name}</Link>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default page;
