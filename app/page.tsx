import Link from "next/link";

const Home = () => {
  return (
    <div className="">
      Here is your Document with the ID: 22
      <br />
      <Link className="hover:underline" href={`/document/22`}>
        View doc
      </Link>
    </div>
  );
};

export default Home;
