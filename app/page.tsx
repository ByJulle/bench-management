import Badge, { BadgeType } from "./components/Badge";

export default function Home() {
  return (
    <main>
      <Badge type={BadgeType.NEUTRAL}>
        <p>Test sdsd</p>
      </Badge>
    </main>
  );
}
