import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/bg1.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 " />

      <SignIn fallbackRedirectUrl="/dashboard" signUpUrl="/sign-up" />

      </div>
  );
}