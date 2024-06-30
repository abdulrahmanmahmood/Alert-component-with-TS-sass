import { ReactNode } from "react";
import "./Alert.scss";
import { BellRing, X, icons } from "lucide-react";

interface Iprops {
  type: string;
  icon: ReactNode;
  title: string;
  description: string;
}

const Alert = ({ type, icon, title, description }: Iprops) => {
  return (
    <div className="alert-danger">
      <div className="alert-header">
        <div className="title">
          {icon}

          <h4>{title}</h4>
        </div>

        <X className="close" size={18} />
      </div>
      <p>{description} </p>
    </div>
  );
};

export default Alert;
