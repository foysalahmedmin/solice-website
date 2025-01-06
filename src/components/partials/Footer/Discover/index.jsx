import { Link } from "react-router-dom";

const Discover = () => {
  const links = [
    { label: "Services", url: "/services/" },
    { label: "Experiences", url: "/experiences/" },
    { label: "Location", url: "/Location" },
    { label: "Team", url: "/team" },
  ];

  return (
    <div className="space-y-6">
      <p className="text-lg uppercase">Discover</p>
      <ul className="">
        {links?.map((item, index) => (
          <li key={index}>
            <Link
              className="cursor-pointer underline-offset-2 hover:decoration-secondary"
              to={item?.url}
              target={item?.target && item?.target}
              rel={item?.rel && item?.rel}
            >
              {item?.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Discover;
