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
  CheckData
} from "../components/auth/";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-end justify-center h-screen w-screen p-20">
      <CheckData />
    </div>
  );
}
