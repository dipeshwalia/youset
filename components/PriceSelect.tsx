import { useAppContext } from "@/hooks/useAppContext";
import { classNames } from "@/utils/index";

const pricing = {
  tiers: [
    {
      id: 1,
      title: "Proteco Insurance",
      price: 12.5,
      frequency: "/month",
      description:
        "Our most affordable package. Your personal belongings will be covered up to 15k$. This is perfect if you own a few belongings.",
      features: ["Everything basic", "48-hour support response time"],
      cta: "Monthly billing",
      mostPopular: false,
    },
    {
      id: 2,
      title: "Umbrella insurance",
      price: 35.73,
      frequency: "/month",
      description:
        "Our most popular package. Your personal belongings will be covered up to 30k$. This package also includes a free water sensor to detect a water leak in your home.",
      features: ["(+) Proteco Insurance", "24-hour support response time"],
      cta: "Monthly billing",
      mostPopular: true,
    },
    {
      id: 3,
      title: "Thor insurance",
      price: 79.3,
      frequency: "/month",
      description:
        "Nothing but the best. Your personal belongings will be covered up to 100k$. It even includes a protection against an alien invasion.",
      features: ["(+) Umbrella insurance", "Unlimited claims"],
      cta: "Monthly billing",
      mostPopular: false,
    },
  ],
};

function PriceSelect() {
  const { appState, setAppState } = useAppContext();

  return (
    <div className="max-w-2xl mx-auto px-4 space-y-12 sm:px-6 lg:max-w-7xl lg:space-y-0 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      {pricing.tiers.map((tier) => (
        <div
          key={tier.title}
          data-testid={`tier-${tier.id}`}
          className={classNames(
            tier.id === appState.preferredPackage
              ? "bg-green-100"
              : "bg-blue-50 hover:bg-green-200",
            "relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col"
          )}
        >
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">
              {tier.title}
            </h3>
            {tier.mostPopular ? (
              <p className="absolute top-0 py-1.5 px-4 bg-purple-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white transform -translate-y-1/2">
                Most popular
              </p>
            ) : null}
            <p className="mt-4 flex items-baseline text-gray-900">
              <span className="text-5xl font-extrabold tracking-tight">
                ${tier.price}
              </span>
              <span className="ml-1 text-xl font-semibold">
                {tier.frequency}
              </span>
            </p>
            <p className="mt-6 text-gray-400 text-sm text-opacity-90">
              {tier.description}
            </p>

            <ul role="list" className="mt-6 space-y-6">
              {tier.features.map((feature) => (
                <li key={feature} className="flex">
                  <span className="ml-3 text-gray-500">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            className={classNames(
              tier.id === appState.preferredPackage
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-blue-50 text-blue-700 hover:bg-blue-100",
              "mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium"
            )}
            data-testid={`select-tier-${tier.id}`}
            onClick={() =>
              setAppState((prev) => ({
                ...prev,
                appState: {
                  preferredPackage: tier.id,
                  selected: true,
                },
              }))
            }
          >
            {tier.cta}
          </button>
        </div>
      ))}
    </div>
  );
}

export default PriceSelect;
