import { CollectEmail, VerifyEmail } from "../components/auth/login/";
import { useState } from "react";

export default function LoginPage() {
  const signupStages = [CollectEmail, VerifyEmail];
  const [currentStage, setCurrentStage] = useState(0);

  const handleNext = () => {
    setCurrentStage((prev) => prev + 1);
  };

  const CurrentStageComponent = signupStages[currentStage];
  return (
    <div className="flex flex-col items-end justify-center h-screen w-screen p-20">
      <CurrentStageComponent onNext={handleNext} />
    </div>
  );
}
