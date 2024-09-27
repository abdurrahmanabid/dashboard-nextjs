import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Bell,
  Bolt,
  Lock,
  Logs,
  MessageCircleHeart,
  User,
  UserRoundPen
} from "lucide-react";
import Link from "next/link";

const Nab = () => {
  const menuList = [
    {
      category: "GENERAL",
      item: [
        {
          link: "/profile",
          icon: <UserRoundPen className="w-5 h-5" />, // Added size classes
          text: "Profile",
        },
        {
          link: "/test",
          icon: <MessageCircleHeart className="w-5 h-5" />,
          text: "Message",
        },
        {
          link: "/notification",
          icon: <Bell className="w-5 h-5" />,
          text: "Notification",
        },
      ],
    },
    {
      category: "SETTINGS",
      item: [
        {
          link: "/",
          icon: <Bolt className="w-5 h-5" />,
          text: "General Settings",
        },
        {
          link: "/",
          icon: <Lock className="w-5 h-5" />,
          text: "Privacy",
        },
        {
          link: "/",
          icon: <Logs className="w-5 h-5" />,
          text: "Logs",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-between min-h-screen min-w-[300px] border-r-[1px] border-gray-700 p-1 fixed ">
      <div>
        <div className="flex flex-row gap-2 p-3 rounded border border-gray-500 h-full">
          {/* avatar */}
          <div className="h-[40px] w-[40px] bg-green-500 rounded-3xl flex justify-center items-center">
            <h1 className="font-bold text-white">AB</h1>{" "}
            {/* Added text color */}
          </div>
          <div>
            <h1 className="font-bold font-sans">Ab Rahman</h1>
            <h1 className="text-sm">abrahmanabid33@gmail.com</h1>
          </div>
        </div>

        <Command>
          <CommandList>
            {menuList.map((cat, index) => (
              <CommandGroup key={index} heading={cat.category}>
                {cat.item.map((item, index) => (
                  <CommandItem key={index}>
                    <a href={item.link} className="flex items-center gap-2">
                      {item.icon}
                      {item.text}
                    </a>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </div>
      <Link href='/settings' className="flex items-center gap-2 p-3 rounded border border-gray-500">
      <User />
      <h1>Users</h1></Link>
      
    </div>
  );
};

export default Nab;
