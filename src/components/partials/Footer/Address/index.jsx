import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../Logo";

const Address = () => {
  return (
    <div className="space-y-6">
      <Logo className="text-xl text-light" />
      <p className="text-lg">
        Aegon House 13 Lanark Square (Ground Floor East) London E14 3LP
      </p>
      <ul className="flex items-center gap-4">
        <li>
          <Link>
            <Instagram />
          </Link>
        </li>
        <li>
          <Link>
            <Linkedin />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Address;
