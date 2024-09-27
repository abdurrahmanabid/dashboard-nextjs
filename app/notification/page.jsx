import { Badge } from "@/components/ui/badge";

const page = () => {
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
    <div>
      {notification.map((item, id) => (
        <div key={id} className="border rounded p-2 mt-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-2xl ${
                item.read ? "bg-gray-500" : "bg-green-400"
              }`}
            />
            <div>
              <h1>{item.text}</h1>
              <p>{item.date}</p>
            </div>
          </div>
          {item.read&& <Badge variant={'primary'} className={'h-6'}>readed</Badge> }
        </div>
      ))}
    </div>
  );
}

export default page