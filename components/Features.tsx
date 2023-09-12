import {
  LightningBoltIcon,
  PuzzleIcon,
  CogIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Screen Readers",
    icon: PuzzleIcon,
  },
  {
    name: "Accessibility Debugging",
    icon: () => <img src="/react.svg" height="24" width="24" />,
  },
  {
    name: "Accessible HTML",
    icon: CogIcon,
  },
  {
    name: "ARIA",
    icon: LightningBoltIcon,
  },
  {
    name: "Focus Management",
    icon: LightningBoltIcon,
  },
  {
    name: "Visual Considerations",
    icon: LightningBoltIcon,
  }
];

function Features() {
  return (
    <>
      <ol className="list-disc my-12">
        {features.map(({ icon: Icon, ...feature }, i) => (
          <li
            className="space-x-4"
            key={feature.name.split(" ").join("-")}
          >
            <div>
              <div className="my-0 font-small dark:text-white">
                {feature.name}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}

export default Features;
