import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const  User = ({ data }) => {
  return (
    <div className="w-full">
      {data.map((data, id) => (
        <div className=" flex justify-between  p-3 w-full" key={id}>
          <div className="flex gap-4 w-96">
            <div
              className={`h-[40px] min-w-[40px] ${
                data.role === "admin" ? "bg-green-500" : "bg-blue-500"
              } rounded-3xl flex justify-center items-center`}
            >
              <h1 className="font-bold text-white">{data.logo}</h1>
            </div>
            <div>
              <h1 className="font-bold font-sans">{data.name}</h1>
              <h1 className="text-sm">{data.email}</h1>
            </div>
          </div>

          <div>
            {data.role === "admin" && <Badge>Admin</Badge>}
            <Badge className="ml-2" variant="secondary">
              Viewer
            </Badge>
          </div>
          <div className="w-96" />
          <Button variant="ghost"> Edit </Button>
        </div>
      ))}
    </div>
  );
};

export default User;
