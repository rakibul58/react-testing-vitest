export default function PrimaryButton({ action = "add" }: { action?: string }) {
  return <button>Click to {action}</button>;
}
