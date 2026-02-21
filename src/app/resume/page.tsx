import { redirect } from "next/navigation";

export default function ResumePage() {
  const resumeUrl = process.env.RESUME_URL;
  if (!resumeUrl) {
    redirect("/");
  }
  redirect(resumeUrl);
}
