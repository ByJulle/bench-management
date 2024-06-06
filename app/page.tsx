import Badge, { BadgeType } from "./components/Badge";

export default function Home() {
  return (
    <main>
      <Badge label="Test" type={BadgeType.ERROR} />
    </main>
  );
}
