import { Fragment } from "react";

const clinicWordPattern = /\b(clinics?)\b/gi;
const clinicWordOnlyPattern = /^clinics?$/i;

interface HighlightClinicTextProps {
  text: string;
  className?: string;
}

export default function HighlightClinicText({
  text,
  className = "text-purple-500",
}: HighlightClinicTextProps) {
  return (
    <>
      {text.split(clinicWordPattern).map((part, index) =>
        clinicWordOnlyPattern.test(part) ? (
          <span key={`${part}-${index}`} className={className}>
            {part}
          </span>
        ) : (
          <Fragment key={`${part}-${index}`}>{part}</Fragment>
        )
      )}
    </>
  );
}
