import {
  CollectEmail,
  VerifyEmail,
  CollectPhoneNumber,
  CollectFullNameAndId,
  CalculateBikes,
  VerifyRent,
  VerifyTotal
} from "../components/auth/";

export default function SignupPage() {
  return (
    <div className="flex flex-col items-end justify-center h-screen w-screen p-20">
      <VerifyTotal />
    </div>
  );
}
