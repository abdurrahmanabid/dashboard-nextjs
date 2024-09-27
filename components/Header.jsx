import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import { CommandDemo } from "./CommandDemo";

const Header = () => {
  const notification = [
    {
      text: "this is a notification",
      date: "9/11/2011",
      read: true,
    },
    {
      text: "this is another notification from google",
      date: "19/11/2021",
      read: false,
    },
  ];
  return (
    <div className="flex justify-between items-center border rounded-lg p-1">
      <CommandDemo />
      <div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div
              className={`w-2 absolute top-4 right-2 h-2 rounded-2xl ${
                notification.find((item) => item.read === true)
                  ? "bg-green-500"
                  : "bg-gray-400"
              }`}
            />
            <Bell className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notification.map((item, id) => (
              <DropdownMenuItem key={id}>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-2xl ${
                      item.read ? "bg-green-500" : "bg-gray-400"
                    }`}
                  />
                  <div>
                    <h1>{item.text}</h1>
                    <p>{item.date}</p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
