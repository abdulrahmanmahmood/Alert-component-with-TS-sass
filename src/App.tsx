import { BellRing } from "lucide-react";
import Alert from "./components/ui/Alert/Alert";

const App = () => {
  return (
    <div>
      <Alert icon={<BellRing />} type="alert-danger" title="first title" description="lorem"/>
    </div>
  );
};

export default App;
