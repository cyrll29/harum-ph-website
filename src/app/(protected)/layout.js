import { ProtectedComponent } from "@/components/auth/ProtectedComponent";

export default function ProtectedLayout({ children }) {
  return (
    <ProtectedComponent>
      {children}
    </ProtectedComponent>
  )
}