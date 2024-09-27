import User from "@/components/Card/User";
const Page = () => {
  const users = [
    {
      name: "Ab Rahman ",
      logo: "AB",
      email: "abrahmanabid33@gmail.com",
      role: 'admin'
    },
    {
      name: "Jon Doe",
      logo: "JD",
      email: "jondoe123@gmail",
      role:'viewer'
    },
    {
      name: "David Miller",
      logo: "DM",
      email: "davidmiller123@gmail",
      role:'viewer'
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 gap-2 border rounded-lg mt-2">
        <div className="flex items-center justify-between">
          <User data={users} />
        </div>
      </div>
    </>
  );
};

export default Page;
