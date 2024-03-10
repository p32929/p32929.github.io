import "./App.css";
import LeftPart from "./components/custom/LeftPart";
import RightPart from "./components/custom/RightPart";
import { Card, CardContent } from "./components/ui/card";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <div className="h-screen w-screen 2xl:p-13 xl:p-13 lg:p-13 md:p-8 p-8">
        <Card className="m-0 h-full w-full p-0">
          <CardContent className="flex h-full w-full flex-row p-0">
            <LeftPart />
            <RightPart />
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </>
  );
}

export default App;
