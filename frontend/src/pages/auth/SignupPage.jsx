import {
  CollectEmail,
  VerifyEmail,
  CollectPhoneNumber,
  CollectFullNameAndId,
  CalculateBikes,
  VerifyRent,
  VerifyTotal,
  AcceptTerms,
  UploadBill,
  CheckData,
} from "../../components/auth/signup/";
import { useState } from "react";

export default function SignupPage() {
  const signupStages = [
    CollectEmail,
    VerifyEmail,
    CollectPhoneNumber,
    CollectFullNameAndId,
    CalculateBikes,
    VerifyRent,
    VerifyTotal,
    AcceptTerms,
    UploadBill,
    CheckData,
  ];
  const [currentStage, setCurrentStage] = useState(0);

  const handleNext = () => {
    setCurrentStage((prev) => prev + 1);
  };

  const handleBack = () => {
    setCurrentStage((prev) => prev - 1);
  };

  const CurrentStageComponent = signupStages[currentStage];
  return (
    <div className="flex flex-col items-end justify-center h-screen w-screen p-20">
      <CurrentStageComponent onNext={handleNext} onBack={handleBack} />
    </div>
  );
}
